import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ElevatedView from "react-native-elevated-view";
import styles from "./styles";

export default class SearchSuggestionChip extends Component {
  static propTypes = {
    text: PropTypes.string,
    gradient: PropTypes.arrayOf(PropTypes.string.isRequired),
    onPress: PropTypes.func
  };

  static defaultProps = {
    text: "",
    colors: ["#6979F8", "#A5AFBB"],
    onPress: () => {}
  };

  render() {
    const { text, gradient, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.suggestionsChipContainer}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.suggestionsChipGradient}
        >
          <Text style={styles.suggestionsChipText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
