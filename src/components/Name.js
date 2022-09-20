import * as React from 'react';

import { animated, useSpring } from 'react-spring';

import { spacingMixin, spacing } from './ui/util/spacing';
import styled from '@emotion/styled';

const NameTag = styled(animated.span)`
    z-index: 2;
    position: absolute;

    font-family: Cocogoose Pro;
    font-size: 32px;
    color: white;

    margin-left: ${spacing(15)};
    margin-top: ${spacing(8)};

    @media only screen and (max-width: 600px) {
        font-size: 15px;

        margin-left: ${spacing(5)};
        margin-top: ${spacing(4)};
    }

    ${spacingMixin}
`;

const Name = ({ dark }) => {
    const darkSpring = useSpring({
        color: dark ? 'black' : 'white',
    });

    return (
        <a href="/">
            <NameTag
                style={darkSpring}
            >
                cwheeler
            </NameTag>
        </a>
    );
};

export default Name;
