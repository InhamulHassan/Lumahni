import styles from "./styles";
// import { strings as loginStrings } from "../../screens/Login";
import React, { PureComponent } from "react";
import { SafeAreaViewStyled, Button } from "./styles";
import { ScrollView } from "react-native";
import Icon from "../Icon";
// import { Button } from "react-native-elements";
import {
  DrawerItems,
  NavigationInjectedProps,
  SafeAreaView,
  withNavigation
} from "react-navigation";

class BurgerMenuDrawer extends PureComponent<NavigationInjectedProps> {
  render() {
    return (
      <SafeAreaView
        style={SafeAreaViewStyled}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          title="Explore"
          onPress={() => this.props.navigation.navigate("ExploreScreen")}
        />
        <Icon
          reverse
          raised
          name="cog"
          type="font-awesome"
          color="#f50"
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(BurgerMenuDrawer);
