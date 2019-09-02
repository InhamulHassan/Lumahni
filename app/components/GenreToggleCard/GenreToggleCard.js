import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
// import { Image } from "react-native-elements";
import ElevatedView from "react-native-elevated-view";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

export default class GenreToggleCard extends Component {
  state = {
    isGenreSelected: false
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    opaqueGradient: PropTypes.arrayOf(PropTypes.string.isRequired)
  };

  static defaultProps = {
    text: "Genre",
    textColor: "#ffffff",
    opaqueGradient: ["#be52f2", "#dba5f5", "#eedff2"]
  };

  toggleOn = () => {
    this.setState({ isGenreSelected: true });
  };

  toggleOff = () => {
    this.setState({ isGenreSelected: false });
  };

  toggleGenre = () => {
    this.state.isGenreSelected ? this.toggleOff() : this.toggleOn();
  };

  render() {
    const { text, textColor, imgUrl, opaqueGradient } = this.props;

    return (
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={this.toggleGenre}
        underlayColor={"#ffffff"}
        style={styles.genreContainer}
      >
        <ElevatedView elevation={3} style={styles.genreWrapper}>
          {imgUrl && (
            <Image source={{ uri: imgUrl }} style={styles.genreImage} />
          )}
          <LinearGradient
            colors={opaqueGradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={
              this.state.isGenreSelected
                ? styles.gradientOverlaySelected
                : styles.gradientOverlay
            }
          />
          <Text textColor={textColor} style={styles.genreText}>
            {this.state.isGenreSelected ? text : text}
          </Text>
        </ElevatedView>
      </TouchableHighlight>
    );
  }
}
