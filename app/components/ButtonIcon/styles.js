import styled, { css } from "styled-components";

export const ButtonContainerStyles = css`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${props => props.backgroundColor};
  margin-top: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: #be52f2;
`;


export const Overlay = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;
