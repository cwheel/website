import { spacingMixin } from './util/spacing';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
    display: flex;

    ${spacingMixin}

    ${({ flex }) => flex && `flex: ${flex}`};
    ${({ absolute }) => absolute && `position: absolute`};
    ${({ alignRight }) => alignRight && 'flex-direction: row-reverse'};

    ${({ verticalCenter }) => verticalCenter && 'align-items: center'};
    ${({ horizontalCenter }) => horizontalCenter && 'justify-content: center'};
`;

const FlexColumn = styled(FlexContainer)`
    flex-direction: column;
`;

const VerticalCenter = styled(FlexContainer)`
    flex-wrap: wrap;
    align-items: center;
`;

const FlexUnit = styled(FlexContainer)`
    flex: 1;
    ${({ alignRight }) => alignRight && 'flex-direction: row-reverse'};
`;

export { FlexContainer, FlexColumn, VerticalCenter, FlexUnit };
