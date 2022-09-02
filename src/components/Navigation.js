import * as React from 'react';

import { animated, useSpring } from 'react-spring';
import { spacing, spacingMixin } from '../components/ui/util/spacing';

import { FlexContainer } from '../components/ui/flex';
import { PrimaryColor } from './ui/util/colors';
import styled from '@emotion/styled';

const links = [
    { title: 'GitHub', href: 'https://github.com/cwheel', target: '_blank' },
    { title: 'Outdoor Projects', href: '/outdoors' },
    { title: 'Contact', href: '#' },
];

const NavigationContainer = styled(FlexContainer)`
    z-index: 1;
`;

const NavigationLink = styled(animated.a)`
    font-family: Cocogoose Pro;
    color: white;

    text-decoration: none;
    padding: ${spacing(2)};

    &:hover {
        background: ${({ dark }) => (dark ? PrimaryColor : 'white')};
        /* Important to override the active spring */
        color: ${({ dark }) => (dark ? 'white' : PrimaryColor)} !important;
    }

    transition: all 0.25s;

    ${spacingMixin}
`;

const Navigation = ({ dark }) => {
    const darkSpring = useSpring({
        color: dark ? PrimaryColor : 'white',
    });

    return (
        <NavigationContainer absolute fullWidth alignRight marginTop={8}>
            <FlexContainer marginRight={15}>
                {links.map(({ title, href, target }) => (
                    <NavigationLink
                        marginLeft={8}
                        href={href}
                        target={target}
                        style={darkSpring}
                        dark={dark}
                    >
                        {title}
                    </NavigationLink>
                ))}
            </FlexContainer>
        </NavigationContainer>
    );
};

export default Navigation;
