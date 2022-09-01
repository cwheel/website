import * as React from 'react';
import styled from '@emotion/styled';

import Name from './Name';
import Navigation from './Navigation';
import { useSpring, animated, config } from 'react-spring';


const StickyHeaderWrapper = styled(animated.div)`
    position: fixed;
    width: 100%;
    height: 120px;
    z-index: 1;
`;

const StickyHeader = ({ heroRef }) => {
    const [heroVisible, setHeroVisible] = React.useState(false);

    const headerBackgroundSpring = useSpring({
        background: heroVisible ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,1)',
        borderBottom: heroVisible ? 'solid 1px rgba(0,0,0,0)' : 'solid 1px black',
    });

    React.useEffect(() => {
        if (heroRef.current) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    setHeroVisible(entry.isIntersecting);
                })
            }, {
                threshold: 0,
                rootMargin: '0px 0px -100% 0px',
            });
              
            observer.observe(heroRef.current)
        }
    }, [heroRef]);

    return (
        <StickyHeaderWrapper style={headerBackgroundSpring}>
            <Name dark={!heroVisible} />
            <Navigation dark={!heroVisible} />
        </StickyHeaderWrapper>
    );
};

export default StickyHeader;