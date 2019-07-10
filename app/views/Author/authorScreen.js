import React, { Component } from "react";
import { AuthorView, AuthorText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class AuthorScreen extends Component<Props> {
  render() {
    return (
        <AuthorView>
            <AuthorText>Author</AuthorText>
        </AuthorView>
    );
  }
}
