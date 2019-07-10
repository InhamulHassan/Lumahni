import React, { Component } from "react";
import { AuthorView, AuthorText } from './styles';
import GenreToggle from "../../components/GenreToggleCard";
import { FlatGrid } from "react-native-super-grid";

export default class OnboardAuthorScreen extends Component<Props> {
  render() {
    return (
      <AuthorView>
        <AuthorText>Author</AuthorText>
        <GenreToggle
          text="Click"
          textColor="#01d1e5"
          backgroundColor="orange"
          imgSrc={require("../../assets/images/art-genre.jpg")}
        />
        <FlatGrid
          itemDimension={100}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
          renderItem={({ item }) => <GenreToggle text={item.toString()} />}
        />
      </AuthorView>
    );
  }
}