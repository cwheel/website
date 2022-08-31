import { css } from "@emotion/react";

const spacing = (num) => `${num * 5}px`;

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
  margin-left: ${spacing(marginLeft)};
  margin-right: ${spacing(marginRight)};
  margin-top: ${spacing(marginTop)};
  margin-bottom: ${spacing(marginBottom)};

  padding-left: ${spacing(paddingLeft)};
  padding-right: ${spacing(paddingRight)};
  padding-top: ${spacing(paddingTop)};
  padding-bottom: ${spacing(paddingBottom)};

  ${fullWidth && `width: 100%`};
  ${fullHeight && `height: 100%`};
`;

export { spacingMixin, spacing };
