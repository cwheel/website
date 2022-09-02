import '../../global.css';

import * as React from 'react';

import { FlexContainer } from '../../components/ui/flex';
import { H3 } from '../../components/ui/headings';
import { Helmet } from 'react-helmet';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import StickyHeader from '../../components/StickyHeader';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { useTransition, animated, config } from 'react-spring';

const HeroImage = css`
    max-height: 500px;
    filter: grayscale() brightness(0.75);
`;

const Hero = styled.div`
    position: relative;
    height: 500px;
`;

const HeroTitle = styled(H3)`
    opacity: 0.75;
`;

const Location = styled.span`
    position: absolute;
    z-index: 10;
    bottom: 20px;
    right: 20px;
    color: white;
    font-size: small;
`;

const HeroWrapper = styled(animated.div)`
    position: absolute;
`;

const heroImages = [
    { image: <StaticImage alt="hero1" src="../../../static/images/outdoors/hero1.jpg" css={HeroImage} />, location: 'Above Kenosha Pass, Park County, CO' },
    { image: <StaticImage alt="hero2" src="../../../static/images/outdoors/hero2.jpg" css={HeroImage} />, location: 'Swiss Syphon, Cenote Jailhouse, Tulum Mexico' },
];

export default function Template({ data }) {
    const heroRef = React.createRef();
    const [hero, setHero] = React.useState(0);

    const heroTransitions = useTransition(hero, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    React.useEffect(() => {
        setTimeout(() => {
            setHero((hero) => {
                if (hero + 1 == heroImages.length) {
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
                    <HeroWrapper
                        style={style}
                    >
                        {heroImages[hero].image}
                    </HeroWrapper>
                ))}

                <Location>{heroImages[hero].location}</Location>
            </Hero>

            {data.allMarkdownRemark.nodes.map((node) => (
                <a
                    href={`/outdoors/${node.frontmatter.slug}`}
                    key={node.frontmatter.slug}
                >
                    {node.frontmatter.name}
                </a>
            ))}
        </>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    slug
                    name
                }
            }
        }
    }
`;
