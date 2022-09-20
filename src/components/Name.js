import * as React from 'react';

import { animated, useSpring } from 'react-spring';

import { isMobile } from '../util/mobile';
import { spacingMixin } from './ui/util/spacing';
import styled from '@emotion/styled';

const NameTag = styled(animated.span)`
    z-index: 2;
    position: absolute;

    font-family: Cocogoose Pro;
    font-size: 32px;
    color: white;

    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }

    ${spacingMixin}
`;

const Name = ({ dark }) => {
    const darkSpring = useSpring({
        color: dark ? 'black' : 'white',
    });

    const mobile = isMobile();

    return (
        <a href="/">
            <NameTag
                marginLeft={mobile ? 5 : 15}
                marginTop={mobile ? 4 : 8}
                style={darkSpring}
                mobile={mobile}
            >
                cwheeler
            </NameTag>
        </a>
    );
};

export default Name;
