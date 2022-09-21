import * as React from 'react';

import { animated, useSpring } from 'react-spring';

import Name from './Name';
import Navigation from './Navigation';
import styled from '@emotion/styled';
import useDarkMode from './ui/util/colorScheme';

const StickyHeaderWrapper = styled(animated.div)`
    position: fixed;
    width: 100%;
    height: 120px;
    z-index: 10;

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;

const StickyHeader = ({ heroRef }) => {
    const [heroVisible, setHeroVisible] = React.useState(
        !(typeof document !== 'undefined' && document?.body?.scrollTop > 500)
    );

    const darkMode = useDarkMode();

    const headerBackgroundSpring = useSpring({
        background: heroVisible
            ? 'rgba(0,0,0,0)'
            : darkMode
            ? 'rgba(0,0,0,1)'
            : 'rgba(255,255,255,1)',
        borderBottom: heroVisible
            ? 'solid 1px rgba(0,0,0,0)'
            : `solid 1px ${darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'}`,
    });

    React.useEffect(() => {
        if (heroRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setHeroVisible(entry.isIntersecting);
                    });
                },
                {
                    threshold: 0,
                    rootMargin: '0px 0px -100% 0px',
                }
            );

            observer.observe(heroRef.current);
        }
    }, [heroRef]);

    return (
        <StickyHeaderWrapper style={headerBackgroundSpring}>
            <Name dark={!darkMode && !heroVisible} />
            <Navigation dark={!heroVisible} />
        </StickyHeaderWrapper>
    );
};

export default StickyHeader;
