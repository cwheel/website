import * as React from 'react';

import { animated, useSpring, useSprings, config } from 'react-spring';
import { spacing, spacingMixin } from '../components/ui/util/spacing';

import { FlexContainer } from '../components/ui/flex';
import { PrimaryColor, TextColor } from './ui/util/colors';
import styled from '@emotion/styled';
import Name from './Name';

const NavigationWrapper = styled(animated.nav)`
    background: white;
    z-index: 10;
    height: 100%;
    width: 100%;

    box-shadow: 0 ${spacing(-1)} ${spacing(6)} rgba(0, 0, 0, 0.5); 

    position: fixed;

    display: flex;
    flex-direction: column;
`;

const NavigationHeader = styled.div`
    width: 100%;
    border-bottom: solid 1px ${TextColor};

    height: 60px;
`;

const NavigationLink = styled(animated.a)`
    text-decoration: none;
    color: ${PrimaryColor};
    font-family: Cocogoose Pro;
    border-bottom: solid 1px ${TextColor};

    height: ${spacing(15)};

    display: flex;
    align-items: center;
    padding-left: ${spacing(5)};
`;

const CloseButtonPart = styled.div`
    height: ${spacing(5)};
    width: 3px;
    background: ${TextColor};

    transform: rotate(${({ left }) => left && '-'}45deg) translate(8px, ${({ right }) => right && '-'}8px);
    border-radius: 3px;
    position: absolute;
`;

const CloseButtonWrapper = styled.div`
    position: relative;
    height: ${spacing(5)};
    width: ${spacing(5)};

    margin-right: ${spacing(2)};
`;

const CloseButton = ({ onClick }) => {
    return (
        <CloseButtonWrapper onClick={onClick} role='button'>
            <CloseButtonPart right />
            <CloseButtonPart left />
        </CloseButtonWrapper>
    )
};

const FullScreenNavigation = ({ links, children }) => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const [fsMenuLinksSprings, fsMenuLinkAnimation] = useSprings(
        links.length,
        i => ({ opacity: 0 })
    );

    const transformSpring = useSpring({
        transform: menuVisible ? 'scale3d(1, 1, 1)' : 'scale3d(0.5, 0.5, 1)',
        pointerEvents: menuVisible ? 'all' : 'none',
        config: config.wobbly,
    });

    const opacitySpring = useSpring({
        top: menuVisible ? '0%' : '100%',
        opacity: menuVisible ? 1 : 0,
    });

    const showMenu = () => {
        setMenuVisible(true);

        fsMenuLinkAnimation.start(i => ({
            opacity: 1,
            delay: (i + 1) * 100,
        }));
    };

    const hideMenu = () => {
        setMenuVisible(false);

        fsMenuLinkAnimation.start(i => ({
            opacity: 0,
        }));
    };

    React.useEffect(() => {
        children(showMenu);
    }, [children]);

    return (
        <>
            <NavigationWrapper style={{...transformSpring , ...opacitySpring}}>
                <NavigationHeader>
                    <Name dark={true} />
                    <FlexContainer fullWidth fullHeight verticalCenter alignRight marginRight={5}>
                        <CloseButton onClick={hideMenu} />
                    </FlexContainer>
                </NavigationHeader>

                {links.map(({ title, href, target }, i) => (<NavigationLink href={href} target={target} style={fsMenuLinksSprings[i]}>{title}</NavigationLink>))}
            </NavigationWrapper>
        </>
    );
};

export default FullScreenNavigation;
