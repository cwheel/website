import { css } from '@emotion/react';

const spacing = num => `${num * 5}px`;

const spacingMixin = ({
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    fullWidth,
    fullHeight,
}) => css`
    ${marginLeft && `margin-left: ${spacing(marginLeft)};`}
    ${marginRight && `margin-right: ${spacing(marginRight)};`}
    ${marginTop && `margin-top: ${spacing(marginTop)};`}
    ${marginBottom && `margin-bottom: ${spacing(marginBottom)};`}

    ${paddingLeft && `padding-left: ${spacing(paddingLeft)};`}
    ${paddingRight && `padding-right: ${spacing(paddingRight)};`}
    ${paddingTop && `padding-top: ${spacing(paddingTop)};`}
    ${paddingBottom && `padding-bottom: ${spacing(paddingBottom)};`}

    ${fullWidth && `width: 100%`};
    ${fullHeight && `height: 100%`};
`;

export { spacingMixin, spacing };
