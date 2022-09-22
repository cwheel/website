import * as React from 'react';

import { FlexColumn, FlexContainer } from '../components/ui/flex';
import { PrimaryColor, TextColor } from './ui/util/colors';
import { animated, config, useSpring, useSprings } from 'react-spring';
import { spacing, spacingMixin } from '../components/ui/util/spacing';

import FullScreenNavigation from './FullScreenNavigation';
import styled from '@emotion/styled';
import useDarkMode from './ui/util/colorScheme';

const links = [
    { title: 'GitHub', href: 'https://github.com/cwheel', target: '_blank' },
    { title: 'Outdoor Projects', href: '/outdoors' },
    { title: 'Contact', href: '#' },
];

const NavigationContainer = styled(FlexContainer)`
    z-index: 1;
    margin-top: ${spacing(8)};

    @media only screen and (max-width: 600px) {
        margin-top: ${spacing(4)};
    }
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

const NavigationLinks = styled.nav`
    display: flex;

    visibility: visible;

    @media only screen and (max-width: 980px) {
        margin-right: ${spacing(4)};
        visibility: hidden;
    }
`;

const HamburgerLayer = styled.div`
    height: 3px;
    width: ${spacing(5)};

    border-radius: 2px;
    margin-bottom: ${spacing(1)};

    background: ${({ dark }) => (dark ? 'black' : 'white')};

    @media (prefers-color-scheme: dark) {
        background: white;
    }
`;

const HamburgerButtonWrapper = styled(FlexColumn)`
    visibility: hidden;

    @media only screen and (max-width: 980px) {
        visibility: visible;
    }
`;

const HamburgerButton = ({ dark, onClick }) => {
    return (
        <HamburgerButtonWrapper onClick={onClick} marginRight={5}>
            <HamburgerLayer dark={dark} />
            <HamburgerLayer dark={dark} />
            <HamburgerLayer dark={dark} />
        </HamburgerButtonWrapper>
    );
};

const Navigation = ({ dark }) => {
    const showFsMenu = React.useRef();
    const darkMode = useDarkMode();

    const darkSpring = useSpring({
        color: dark ? (darkMode ? 'white' : PrimaryColor) : 'white',
    });

    return (
        <>
            <NavigationContainer absolute fullWidth alignRight>
                <HamburgerButton
                    dark={dark}
                    onClick={() => showFsMenu?.current()}
                />

                <NavigationLinks>
                    {links.map(({ title, href, target }) => (
                        <NavigationLink
                            marginLeft={8}
                            href={href}
                            target={target}
                            style={darkSpring}
                            dark={dark}
                            key={title}
                        >
                            {title}
                        </NavigationLink>
                    ))}
                </NavigationLinks>
            </NavigationContainer>

            <FullScreenNavigation links={links}>
                {(showMenu) => (showFsMenu.current = showMenu)}
            </FullScreenNavigation>
        </>
    );
};

export default Navigation;
