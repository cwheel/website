import * as React from 'react';
import styled from '@emotion/styled';
import { spacingMixin } from './ui/util/spacing';
import { useSpring, animated } from 'react-spring';

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
        <a href='/'>
            <NameTag marginLeft={15} marginTop={8} style={darkSpring}>cwheeler</NameTag>
        </a>
    );
}

export default Name;