import React, { Component } from "react";
import { HomeView, HomeButton, HomeText } from "./styles";
import { NavigationScreenProps } from "react-navigation";
import ButtonIcon from "../../components/ButtonIcon";
import Icon from "../../components/Icon";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Home",
    headerLeft: (
      <HomeButton title="H" onPress={() => navigation.toggleDrawer()} />
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <HomeView>
        <HomeText>I am home</HomeText>
        <ButtonIcon
          title="Loading button"
          type="solid"
          loading
        />

        <HomeButton
          title="Home Drawer"
          onPress={() => navigate("LoginScreen")}
        />
      </HomeView>
      // {/* <Button title={detailStrings.detailTitle} onPress={() => navigate("DetailScreen")} />
      // <Button title={optionStrings.optionsTitle} onPress={() => navigate("OptionsScreen")} /> */}
    );
  }
}
