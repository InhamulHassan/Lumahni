import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { Image } from "react-native-elements";
import PropTypes from "prop-types";
import ElevatedView from "react-native-elevated-view";
import styles from "./styles";

export default class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object,
    bookGr: PropTypes.object,
    authorBookGr: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    book: {},
    bookGr: {},
    authorBookGr: {},
    onPress: () => {}
  };

  render() {
    const { book, bookGr, authorBookGr, onPress } = this.props;

    let bookObject = {};

    if (Object.keys(book).length > 0) {
      bookObject = {
        title: book.title,
        img_url: book.img,
        author: book.authors ? book.authors[0].name : ""
      };
    } else if (Object.keys(bookGr).length > 0) {
      bookObject = {
        title: bookGr.title,
        img_url: bookGr.image_url,
        author: bookGr.authors[0].name
      };
    } else if (Object.keys(authorBookGr).length > 0) {
      bookObject = {
        title: authorBookGr.title,
        img_url: authorBookGr.image_url,
        author: ""
      };
    }

    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={"#ffffff"}
        onPress={onPress}
        style={styles.bookContainer}
      >
        <View style={styles.viewContainer}>
          <ElevatedView elevation={3} style={styles.bookImageWrapper}>
            {bookObject.img_url && (
              <Image
                style={styles.bookImage}
                source={{ uri: bookObject.img_url }}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
          </ElevatedView>
          <Text style={styles.bookTitle}>{bookObject.title}</Text>
          <Text style={styles.authorName}>{bookObject.author}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
