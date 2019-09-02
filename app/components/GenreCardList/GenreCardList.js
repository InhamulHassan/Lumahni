import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { Image } from "react-native-elements";
import ElevatedView from "react-native-elevated-view";
import styles from "./styles";

export default class GenreCardList extends Component {
  static propTypes = {
    genre: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    genre: {},
    onPress: () => {}
  };

  render() {
    const { genre, onPress } = this.props;

    const genreObject = {
      name: genre.name,
      img_url: genre.img_s
    };

    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={"#ffffff"}
        onPress={onPress}
        style={styles.genreListContainer}
      >
        <ElevatedView elevation={3} style={styles.rootViewContainer}>
          <View style={styles.genreImageView}>
            <ElevatedView elevation={3} style={styles.genreImageWrapper}>
              {genreObject.img_url && (
                <Image
                  style={styles.genreImage}
                  source={{ uri: genreObject.img_url }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              )}
            </ElevatedView>
          </View>
          <View style={styles.textView}>
            <Text style={styles.genreName}>{genreObject.name}</Text>
          </View>
        </ElevatedView>
      </TouchableHighlight>
    );
  }
}
