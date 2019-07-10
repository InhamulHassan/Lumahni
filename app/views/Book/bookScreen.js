import React, { Component } from "react";
import { BookView, BookText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class BookScreen extends Component<Props> {
  render() {
    return (
        <BookView>
            <BookText>Book Screen</BookText>
        </BookView>
    );
  }
}
