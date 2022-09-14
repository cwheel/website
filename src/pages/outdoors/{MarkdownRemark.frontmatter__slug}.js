import '../../global.css';

import * as React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FlexColumn } from '../../components/ui/flex';
import { H1 } from '../../components/ui/headings';
import { Helmet } from 'react-helmet';
import StickyHeader from '../../components/StickyHeader';
import { TextColor, TextLightColor } from '../../components/ui/util/colors';
import { graphql } from 'gatsby';
import { spacing } from '../../components/ui/util/spacing';
import styled from '@emotion/styled';

const HeroImage = styled(GatsbyImage)`
    max-height: 500px;
`;

const Content = styled.p`
    font-size: large;
    color: ${TextColor};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Cocogoose Pro;
    }

    picture {
        max-height: 500px;
    }

    figcaption {
        color: ${TextLightColor};
        text-align: center;
        border-top: 1px solid ${TextLightColor};
        font-style: italic;

        margin-top: ${spacing(3)};
        padding-top: ${spacing(3)};
        padding-bottom: ${spacing(3)};
    }

    p {
        line-height: 1.5;
        margin-bottom: ${spacing(6)};
    }
`;

const ContentWrapper = styled(FlexColumn)`
    margin-left: 15%;
    margin-right: 15%;
`;

const Title = styled(H1)`
    border-left: solid ${spacing(2)};
    padding-left: ${spacing(6)};
`;

export default function Template({ data }) {
    const { markdownRemark } = data;
    const {
        frontmatter: { name, images },
        html,
    } = markdownRemark;

    const heroRef = React.createRef();

    return (
        <>
            <Helmet>
                <meta
                    property="og:image"
                    content={
                        images[0].childImageSharp.gatsbyImageData.images
                            .fallback.src
                    }
                />

                <title>{name}</title>
            </Helmet>

            <StickyHeader heroRef={heroRef} />

            <div ref={heroRef}>
                <HeroImage alt="" image={getImage(images[0])} />
            </div>

            <ContentWrapper>
                <Title marginTop={15} marginBottom={5}>
                    {name}
                </Title>
                <Content dangerouslySetInnerHTML={{ __html: html }}></Content>
            </ContentWrapper>
        </>
    );
}

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                name
                images {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
