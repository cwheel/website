import '../../global.css';

import * as React from 'react';

import { FlexColumn, FlexContainer, FlexUnit } from '../../components/ui/flex';
import { H1, H2, H3, H4 } from '../../components/ui/headings';
import { TextColor, TextLightColor } from '../../components/ui/util/colors';
import { animated, config, useTransition } from 'react-spring';

import { Helmet } from 'react-helmet';
import StickyHeader from '../../components/StickyHeader';
import { graphql } from 'gatsby';
import heroImages from './heroImages';
import { spacing } from '../../components/ui/util/spacing';
import styled from '@emotion/styled';

const Hero = styled.div`
    position: relative;
    height: 500px;
`;

const HeroTitle = styled(H1)`
    opacity: 0.75;
    font-size: ${spacing(5)};
`;

const Location = styled.span`
    position: absolute;
    z-index: 10;
    bottom: ${spacing(4)};
    right: ${spacing(4)};
    color: white;
    font-size: small;
`;

const HeroWrapper = styled(animated.div)`
    position: absolute;
`;

const Post = styled.a`
    text-decoration: none;
    border-top: 1px solid black;
    margin-top: ${spacing(4)};
    color: ${TextColor};

    detail {
        color: red;
    }
`;

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
];

const ContentWrapper = styled(FlexColumn)`
    margin-left: 15%;
    margin-right: 15%;
`;

const PostDetail = styled.span`
    color: ${TextLightColor};
`;

const Month = styled(H3)`
    color: ${TextLightColor};
`;

const groupPosts = (nodes) => {
    const years = {};

    nodes.forEach((node) => {
        if (years[node.frontmatter.year]) {
            if (years[node.frontmatter.year][node.frontmatter.month]) {
                years[node.frontmatter.year][node.frontmatter.month].push(node);
            } else {
                years[node.frontmatter.year][node.frontmatter.month] = [node];
            }
        } else {
            years[node.frontmatter.year] = { [node.frontmatter.month]: [node] };
        }
    });

    const ret = [];
    const yearsSorted = Object.keys(years).sort(
        (a, b) => parseInt(a, 10) > parseInt(b, 10)
    );
    yearsSorted.forEach((year) =>
        ret.push({ year, months: years[year.toString()] })
    );

    ret.forEach((year) => {
        const monthsSorted = Object.keys(year.months).sort(
            (a, b) => months[a] > months[b]
        );
        const sortedMonths = [];

        monthsSorted.forEach((month) =>
            sortedMonths.push({ month, posts: year.months[month] })
        );

        year.months = sortedMonths;
    });

    return ret;
};

export default function Template({ data }) {
    const heroRef = React.createRef();
    const [hero, setHero] = React.useState(
        Math.floor(Math.random() * (heroImages.length + 1))
    );
    const posts = groupPosts(data.allMarkdownRemark.nodes);

    const heroTransitions = useTransition(hero, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    React.useEffect(() => {
        setTimeout(() => {
            setHero((hero) => {
                if (hero + 1 === heroImages.length) {
                    return 0;
                } else {
                    return hero + 1;
                }
            });
        }, 10 * 1000);
    }, [hero]);

    return (
        <>
            <Helmet>
                <title>Outdoor Projects</title>
            </Helmet>

            <StickyHeader heroRef={heroRef} />

            <Hero ref={heroRef}>
                <FlexContainer
                    fullHeight
                    fullWidth
                    verticalCenter
                    horizontalCenter
                    absolute
                    z={1}
                >
                    <HeroTitle color="white">Outdoor Projects</HeroTitle>
                </FlexContainer>

                {heroTransitions((style, hero) => (
                    <HeroWrapper style={style}>
                        {heroImages[hero].image}
                    </HeroWrapper>
                ))}

                <Location>{heroImages[hero].location}</Location>
            </Hero>

            <ContentWrapper marginTop={15}>
                {posts.map((group) => {
                    return (
                        <>
                            <H2>{group.year}</H2>

                            {group.months.map((month) => {
                                return (
                                    <>
                                        <Month>{month.month}</Month>
                                        {month.posts.map((post) => (
                                            <Post
                                                href={`/outdoors/${post.frontmatter.slug}`}
                                                key={post.frontmatter.slug}
                                            >
                                                <FlexContainer
                                                    marginTop={4}
                                                    verticalCenter
                                                >
                                                    <FlexUnit>
                                                        <H4>
                                                            {
                                                                post.frontmatter
                                                                    .name
                                                            }
                                                        </H4>
                                                    </FlexUnit>

                                                    <FlexUnit alignRight>
                                                        <FlexContainer
                                                            verticalCenter
                                                        >
                                                            <PostDetail>
                                                                {
                                                                    post
                                                                        .frontmatter
                                                                        .location
                                                                }
                                                            </PostDetail>
                                                        </FlexContainer>
                                                    </FlexUnit>
                                                </FlexContainer>

                                                <PostDetail>
                                                    {post.frontmatter.activity}
                                                </PostDetail>
                                                <p>{post.excerpt}</p>
                                            </Post>
                                        ))}
                                    </>
                                );
                            })}
                        </>
                    );
                })}
            </ContentWrapper>
        </>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            nodes {
                excerpt(pruneLength: 300)
                frontmatter {
                    slug
                    name
                    month
                    year
                    location
                    activity
                }
            }
        }
    }
`;
