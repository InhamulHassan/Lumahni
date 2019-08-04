import React, { Component } from "react";
import { GenreView, GenreText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class GenreScreen extends Component<Props> {
  render() {
    return (
        <GenreView>
            <GenreText>Genre</GenreText>
        </GenreView>
    );
  }
}
