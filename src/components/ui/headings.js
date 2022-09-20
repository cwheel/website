import { spacing, spacingMixin } from './util/spacing';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const heading = ({ color, ...props }) => css`
    font-family: Cocogoose Pro;
    color: ${color || 'black'};
    margin: 0;

    ${spacingMixin(props)}
`;

const H1 = styled.h1`
    ${heading}
    font-size: ${spacing(15)};

    @media only screen and (max-width: 600px) {
        font-size: ${spacing(8)};
    }
`;

const H2 = styled.h2`
    ${heading}
    font-size: ${spacing(11)};
`;

const H3 = styled.h3`
    ${heading}
    font-size: ${spacing(5)};
`;

const H4 = styled.h4`
    ${heading}
    font-size: ${spacing(4)};
`;

const H5 = styled.h5`
    ${heading}
    font-size: ${spacing(3)};
`;

const H6 = styled.h6`
    ${heading}
    font-size: ${spacing(2)};
`;

export { H1, H2, H3, H4, H5, H6 };
