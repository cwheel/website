import '../../global.css'

import * as React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';


export default function Template({
    data,
}) {
    return (
        data.allMarkdownRemark.nodes.map(node => <span key={node.frontmatter.slug}>{node.frontmatter.name}</span>)
    );
};

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    slug,
                    name,
                }
            }
        }
    }
`;