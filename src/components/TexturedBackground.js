import { animated, config, useSprings } from 'react-spring';

import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Pill = styled(animated.div)`
    position: absolute;
    border-radius: 5px;
    background: white;

    height: 10px;
    width: 100px;
`;

const start = () => Math.random() * window.innerHeight;

const TexturedBackground = () => {
    const [springs, springApi] = useSprings(10, () => ({
        opacity: 0,
        top: start(),
        left: 0,
        loop: true,
    }));

    React.useEffect(() => {
        springApi.start((i) => ({
            opacity: 1,
            left: window.innerWidth + 200,
            loop: true,
            config: { friction: 50 + Math.random() * 50 },
        }));
    }, []);

    return (
        <Wrapper>
            {springs.map((style) => (
                <Pill style={style} />
            ))}
        </Wrapper>
    );
};

export default TexturedBackground;
