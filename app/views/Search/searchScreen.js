import React, { Component } from "react";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { SearchBar } from "react-native-elements";

export default class SearchScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  updateSearch = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <View style={styles.rootView}>
        <View>
          <SearchBar
          containerStyle={styles.searchContainer}
            placeholder="Type the book name, genre..."
            onChangeText={this.updateSearch}
            value={query}
            platform="default"
            lightTheme
            round
          />
        </View>
      </View>
    );
  }
}
