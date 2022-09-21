import '../global.css';

import * as React from 'react';

import { H1, H2, H3 } from '../components/ui/headings';
import { PrimaryColor, SecondaryColor } from '../components/ui/util/colors';
import { animated, config, useTransition } from 'react-spring';

import { FlexContainer } from '../components/ui/flex';
import Link from '../components/ui/link';
import Navigation from '../components/Navigation';
import TexturedBackground from '../components/TexturedBackground';
import { spacing } from '../components/ui/util/spacing';
import styled from '@emotion/styled';

const Page = styled.main`
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${PrimaryColor};

    font-family: Cocogoose Pro;
`;

const Content = styled(FlexContainer)`
    padding-left: ${spacing(15)};
    padding-right: ${spacing(15)};

    @media only screen and (max-width: 600px) {
        padding-left: ${spacing(5)};
        padding-right: ${spacing(5)};
    }
`;

const Highlight = styled.span`
    color: ${SecondaryColor};
`;

const activities = [
    'cave diving',
    'cross country mountain biking',
    'waterfall ice climbing',
    'caving',
    'backcountry skiing',
    'backpacking',
    'brewing beer',
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
                if (activity + 1 === activities.length) {
                    return 0;
                } else {
                    return activity + 1;
                }
            });
        }, 5000);
    }, [activity]);

    return (
        <Page>
            {/* <TexturedBackground /> */}
            <Navigation />

            <Content fullHeight verticalCenter>
                <div>
                    <H1 color="white">Hello!</H1>
                    <H2 color="white">
                        I&rsquo;m <Highlight>Cameron Wheeler</Highlight>
                    </H2>
                    <H3 color="white">
                        and I&rsquo;m a web performance Tech Lead{' '}
                        <Link href="https://yelp.com">
                            <Highlight>@Yelp</Highlight>
                        </Link>
                        .
                    </H3>

                    <H3 color="white" marginTop={10}>
                        When I&rsquo;m not engineering, you&rsquo;ll find me
                        &nbsp;
                        <span style={{ position: 'relative' }}>
                            {transitions((style, activity) => (
                                <animated.span
                                    style={{
                                        ...style,
                                        'inline-size': 'max-content',
                                        'position': 'absolute',
                                    }}
                                >
                                    <Highlight>
                                        {activities[activity]}
                                    </Highlight>
                                    .
                                </animated.span>
                            ))}
                        </span>
                    </H3>
                </div>
            </Content>
        </Page>
    );
};

export default IndexPage;

export const Head = () => <title>Cameron Wheeler</title>;
