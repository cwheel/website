import '../global.css';

import * as React from 'react';

import { FlexContainer, VerticalCenter } from '../components/ui/flex';
import { H1, H2, H3 } from '../components/ui/headings';
import { PrimaryColor, SecondaryColor } from '../components/ui/util/colors';
import { animated, config, useTransition } from 'react-spring';

import Navigation from '../components/Navigation';
import styled from '@emotion/styled';

const Page = styled.main`
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${PrimaryColor};

    font-family: Cocogoose Pro;
`;

const Highlight = styled.span`
    color: ${SecondaryColor};
`;

const activites = [
    'cave diving',
    'cross country mountain biking',
    'waterfall ice climbing',
    'exploring dry caves',
    'backcountry skiing',
    'backpacking',
];

const IndexPage = () => {
    const [activity, setActivity] = React.useState(0);

    const transitions = useTransition(activity, {
        from: { opacity: 0, top: 0 },
        enter: { opacity: 1, top: 0 },
        leave: { opacity: 0, top: -5 },
        config: config.molasses,
    });

    React.useEffect(() => {
        setTimeout(() => {
            setActivity((activity) => {
                if (activity + 1 == activites.length) {
                    return 0;
                } else {
                    return activity + 1;
                }
            });
        }, 5000);
    }, [activity]);

    return (
        <Page>
            <Navigation />

            <FlexContainer fullWidth fullHeight marginLeft={15}>
                <VerticalCenter>
                    <div>
                        <H1 color='white'>Hello!</H1>
                        <H2 color='white'>
                            I&rsquo;m <Highlight>Cameron Wheeler</Highlight>
                        </H2>
                        <H3 color='white'>
                            and I&rsquo;m a web performance Tech Lead{' '}
                            <Highlight>@Yelp</Highlight>.
                        </H3>
                        <H3 color='white' marginTop={10}>
                            When I&rsquo;m not engineering, you&rsquo;ll find me
                            &nbsp;
                            <span style={{ position: 'relative' }}>
                                {transitions((style, activity) => (
                                    <animated.span
                                        style={{
                                            ...style,
                                            width: '1000px',
                                            position: 'absolute',
                                        }}
                                    >
                                        <Highlight>
                                            {activites[activity]}
                                        </Highlight>
                                        .
                                    </animated.span>
                                ))}
                            </span>
                        </H3>
                    </div>
                </VerticalCenter>
            </FlexContainer>
        </Page>
    );
};

export default IndexPage;

export const Head = () => <title>Cameron Wheeler</title>;
