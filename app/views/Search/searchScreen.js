import React, { Component } from "react";
import { SearchView, SearchText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class SearchScreen extends Component<Props> {
  render() {
    return (
        <SearchView>
            <SearchText>Book Screen</SearchText>
        </SearchView>
    );
  }
}
