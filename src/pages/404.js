import * as React from 'react';

import { FlexContainer, VerticalCenter } from '../components/ui/flex';
import { H1, H3 } from '../components/ui/headings';

import Navigation from '../components/Navigation';
import { PrimaryColor } from '../components/ui/util/colors';
import styled from '@emotion/styled';

const Page = styled.main`
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${PrimaryColor};
`;

const NotFoundPage = () => {
    return (
        <Page>
            <Navigation />

            <FlexContainer fullWidth fullHeight marginLeft={15}>
                <VerticalCenter>
                    <div>
                        <H1>Not found</H1>
                        <H3>Sorry, maybe try heading back?</H3>
                    </div>
                </VerticalCenter>
            </FlexContainer>
        </Page>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
