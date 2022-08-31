import '../../global.css';

import * as React from 'react';

import { graphql } from 'gatsby';
import styled from '@emotion/styled';

export default function Template({ data }) {
    return data.allMarkdownRemark.nodes.map((node) => (
        <span key={node.frontmatter.slug}>{node.frontmatter.name}</span>
    ));
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
