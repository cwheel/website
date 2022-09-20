import * as React from 'react';

import { PrimaryColor, TextColor } from './ui/util/colors';
import { animated, config, useSpring, useSprings } from 'react-spring';
import { spacing, spacingMixin } from '../components/ui/util/spacing';

import { FlexContainer } from '../components/ui/flex';
import FullScreenNavigation from './FullScreenNavigation';
import { isMobile } from '../util/mobile';
import styled from '@emotion/styled';

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
    margin-right: ${spacing(15)};

    @media only screen and (max-width: 600px) {
        margin-right: ${spacing(4)};
    }
`;

const HamburgerLayer = styled.div`
    height: 3px;
    width: ${spacing(5)};

    border-radius: 2px;
    margin-bottom: ${spacing(1)};

    background: ${({ dark }) => (dark ? 'black' : 'white')};
`;

const HamburgerButton = ({ dark, onClick }) => {
    return (
        <div onClick={onClick}>
            <HamburgerLayer dark={dark} />
            <HamburgerLayer dark={dark} />
            <HamburgerLayer dark={dark} />
        </div>
    );
};

const Navigation = ({ dark }) => {
    const showFsMenu = React.useRef();

    const darkSpring = useSpring({
        color: dark ? PrimaryColor : 'white',
    });

    return (
        <>
            <NavigationContainer absolute fullWidth alignRight>
                <NavigationLinks>
                    {isMobile() ? (
                        <HamburgerButton
                            dark={dark}
                            onClick={() => showFsMenu?.current()}
                        />
                    ) : (
                        links.map(({ title, href, target }) => (
                            <NavigationLink
                                marginLeft={8}
                                href={href}
                                target={target}
                                style={darkSpring}
                                dark={dark}
                            >
                                {title}
                            </NavigationLink>
                        ))
                    )}
                </NavigationLinks>
            </NavigationContainer>

            <FullScreenNavigation links={links}>
                {(showMenu) => (showFsMenu.current = showMenu)}
            </FullScreenNavigation>
        </>
    );
};

export default Navigation;
