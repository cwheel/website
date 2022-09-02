import '../../global.css';

import * as React from 'react';

import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import StickyHeader from '../../components/StickyHeader';
import { FlexContainer } from '../../components/ui/flex';
import { H3 } from '../../components/ui/headings';

const HeroImage = css`
    max-height: 500px;
    filter: grayscale() brightness(0.75);
`;

const Hero = styled.div`
    position: relative;
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

export default function Template({ data }) {
    const heroRef = React.createRef();

    return (<>
        <Helmet>
            <title>Outdoor Projects</title>
        </Helmet>

        <StickyHeader heroRef={heroRef} />

        <Hero ref={heroRef}>
            <FlexContainer fullHeight fullWidth verticalCenter horizontalCenter absolute z={1}>
                <HeroTitle color='white'>Outdoor Projects</HeroTitle>
            </FlexContainer>
            
            <StaticImage alt="" src="../../../static/images/outdoors/hero1.jpg" css={HeroImage} />
            <Location>Above Kenosha Pass, Park County, CO</Location>
        </Hero>
    
        {data.allMarkdownRemark.nodes.map((node) => (
            <a
                href={`/outdoors/${node.frontmatter.slug}`}
                key={node.frontmatter.slug}
            >
                {node.frontmatter.name}
            </a>
        ))}
    </>);
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
