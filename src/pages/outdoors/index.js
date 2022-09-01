import '../../global.css';

import * as React from 'react';

import { graphql } from 'gatsby';
import styled from '@emotion/styled';

export default function Template({ data }) {
    return data.allMarkdownRemark.nodes.map((node) => (
        <a href={`/outdoors/${node.frontmatter.slug}`} key={node.frontmatter.slug}>{node.frontmatter.name}</a>
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
