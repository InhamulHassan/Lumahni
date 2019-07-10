import styled, { css } from "styled-components";
import { Platform } from "react-native";

// const raised = props => this.props.raised;
// const reverse = props => this.props.reversed;
// const disabled = props => this.props.disabled;
// const size = props => this.props.size;
// const color = props => this.props.color;

const getBackgroundColor = (reverse, raised, color) => {
  reverse ? color : raised ? "white" : "transparent";
};

const ButtonStyles = css`
  margin: 7px;
`;

const RaisedStyles = css`
  ${Platform.select({
    android: css`
      elevation: 2;
    `,
    default: css`
      shadow-color: rgba(0, 0, 0, 0.4);
      shadow-offset: 1px 1px;
      shadow-opacity: 1;
      shadow-radius: 1;
    `
  })}
`;

const DisabledStyles = css`
  background-color: #d1d5d8;
`;

const ComponentStylesReversedRaised = (reverse, raised, size) => {
  (reverse || raised) &&
    css`
    ${ButtonStyles}
    border-radius: ${size + 4};
    height: ${size * 2 + 4};
    width: ${size * 2 + 4};
  `;
};

const ComponentStyleRaised = (reverse, raised, color) => {
  raised &&
    css`
    ${RaisedStyles}
    background-color: ${getBackgroundColor(reverse, raised, color)};
    align-items: center;
    justify-items: center;
`;
};

const ComponentStyleDisabled = disabled => {
  disabled &&
    css`
      ${DisabledStyles}
    `;
};

export const ComponentStyles = css`
  ${ComponentStylesReversedRaised(
    props => props.reverse,
    props => props.raised,
    props => props.size
  )}
  ${ComponentStyleRaised(
    props => props.reverse,
    props => props.raised,
    props => props.color
  )}
  ${ComponentStyleDisabled(props => props.disabled)}
`;

export const IconComponentStyles = css`
  background-color: transparent;
`;
