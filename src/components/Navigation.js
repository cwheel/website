import * as React from 'react';

import { spacing, spacingMixin } from '../components/ui/util/spacing';

import { FlexContainer } from '../components/ui/flex';
import { PrimaryColor } from './ui/util/colors';
import styled from '@emotion/styled';

const links = [
    { title: 'GitHub', href: 'https://github.com/cwheel', target: '_blank' },
    { title: 'Outdoor Projects', href: '#' },
    { title: 'Contact', href: '#' },
];

const NavigationLink = styled.a`
    color: white;
    text-decoration: none;
    padding: ${spacing(2)};

    &:hover {
        background-color: white;
        color: ${PrimaryColor};
    }

    transition: all 0.25s;

    ${spacingMixin}
`;

const Navigation = () => {
    return (
        <FlexContainer absolute fullWidth alignRight marginTop={8}>
            <FlexContainer marginRight={15}>
                {links.map(({ title, href, target }) => (
                    <NavigationLink marginLeft={8} href={href} target={target}>
                        {title}
                    </NavigationLink>
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};

export default Navigation;
