import React, { Component } from "react";
// import { Text, Button, View } from "react-native";
import { LoginView, LoginText, LoginButton } from './styles';

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LoginView>
        <LoginText>This is the LoginScreen.</LoginText>
        <LoginButton
          title="Drawer"
          onPress={() => navigate("HomeScreen")}
        />
        <LoginButton
          title="OnboardGenres"
          onPress={() => navigate("OnboardGenreScreen")}
        />
        <LoginButton
          title="OnboardAuthors"
          onPress={() => navigate("OnboardAuthorScreen")}
        />
      </LoginView>
    );
  }
}
