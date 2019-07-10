import styled, { css } from "styled-components";
import LinearGradient from "react-native-linear-gradient";

export const ButtonContainerStyles = css`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${props => props.backgroundColor};
  margin-top: 5px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4;
  overflow: hidden;
  elevation: 5;
`;

export const GenreText = styled.Text`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const GenreImage = styled.View`
  width: 120px;
  height: 120px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;
