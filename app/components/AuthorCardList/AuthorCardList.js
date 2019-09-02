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

export default class AuthorCardList extends Component {
  static propTypes = {
    author: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    author: {},
    onPress: () => {}
  };

  render() {
    const { author, onPress } = this.props;

    let authorObject = {
      name: author.name,
      img_url: author.img_m
    };

    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={"#ffffff"}
        onPress={onPress}
        style={styles.authorListContainer}
      >
        <ElevatedView elevation={3} style={styles.rootViewContainer}>
          <View style={styles.authorImageView}>
            <ElevatedView elevation={3} style={styles.authorImageWrapper}>
              {authorObject.img_url && (
                <Image
                  style={styles.authorImage}
                  source={{ uri: authorObject.img_url }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              )}
            </ElevatedView>
          </View>
          <View style={styles.textView}>
            <Text style={styles.authorName}>{authorObject.name}</Text>
          </View>
        </ElevatedView>
      </TouchableHighlight>
    );
  }
}
