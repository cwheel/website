import * as React from 'react';
import styled from '@emotion/styled';

const StyledLink = styled.a`
    text-decoration: none;
`;

const Link = ({ href, children }) => <StyledLink href={href}>{children}</StyledLink>;

export default Link;