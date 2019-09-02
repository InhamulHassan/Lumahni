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

export default class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    book: {},
    onPress: () => {}
  };

  render() {
    const { book, onPress } = this.props;

    let bookObject = {
      title: book.title,
      img_url: book.img,
      author: book.authors ? book.authors[0].name : ""
    };

    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={"#ffffff"}
        onPress={onPress}
        style={styles.bookListContainer}
      >
        <ElevatedView elevation={3} style={styles.rootViewContainer}>
          <View style={styles.bookImageView}>
            <ElevatedView elevation={2} style={styles.bookImageWrapper}>
              {bookObject.img_url && (
                <Image
                  style={styles.bookImage}
                  source={{ uri: bookObject.img_url }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              )}
            </ElevatedView>
          </View>
          <View style={styles.textView}>
            <Text style={styles.bookTitle}>{bookObject.title}</Text>
            <Text style={styles.authorName}>{bookObject.author}</Text>
          </View>
        </ElevatedView>
      </TouchableHighlight>
    );
  }
}
