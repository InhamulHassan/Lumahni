import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  ButtonContainerStyles,
  GenreText,
  GenreImage,
  Image,
  Overlay
} from "./styles";
import PropTypes from "prop-types";
import accents from "../../config/accents";

export default class GenreToggleCard extends Component {
  state = {
    isGenreSelected: false
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    imgSrc: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
        headers: PropTypes.objectOf(PropTypes.string)
      }),
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
          headers: PropTypes.objectOf(PropTypes.string)
        })
      )
    ]).isRequired,
    opaqueGradient: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ...TouchableOpacity.propTypes
  };

  static defaultProps = {
    text: "Genre",
    textColor: "white",
    backgroundColor: "grey",
    imgSrc: require("../../assets/images/art-genre.jpg"),
    opaqueGradient: ["#be52f2", "#dba5f5", "#eedff2"],
  };

  toggleOn() {
    this.setState({ isGenreSelected: true });
  }

  toggleOff() {
    this.setState({ isGenreSelected: false });
  }

  toggleGenre() {
    this.state.isGenreSelected ? this.toggleOff() : this.toggleOn();
  }

  getRandomAccent(obj) {
    let keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  render() {
    const {
      text,
      textColor,
      backgroundColor,
      imgSrc,
      opaqueGradient,
      ...otherProps
    } = this.props;

    const ButtonContainer = styled.TouchableOpacity`
      ${ButtonContainerStyles}
    `;

    return (
      <ButtonContainer
        onPress={() => this.toggleGenre()}
        backgroundColor={backgroundColor}
        {...otherProps}
      >
        <GenreImage>
          {imgSrc && <Image source={imgSrc} />}
          {!this.state.isGenreSelected && (
            <Overlay
              colors={opaqueGradient.accent}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            />
          )}
        </GenreImage>
        <GenreText textColor={textColor}>
          {this.state.isGenreSelected ? text : text}
        </GenreText>
      </ButtonContainer>
    );
  }
}
