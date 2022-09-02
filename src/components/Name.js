import * as React from 'react';

import { animated, useSpring } from 'react-spring';

import { spacingMixin } from './ui/util/spacing';
import styled from '@emotion/styled';

const NameTag = styled(animated.span)`
    z-index: 2;
    position: absolute;

    font-family: Cocogoose Pro;
    font-size: 32px;
    color: white;

    ${spacingMixin}
`;

const Name = ({ dark }) => {
    const darkSpring = useSpring({
        color: dark ? 'black' : 'white',
    });

    return (
        <a href="/">
            <NameTag marginLeft={15} marginTop={8} style={darkSpring}>
                cwheeler
            </NameTag>
        </a>
    );
};

export default Name;
