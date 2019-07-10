import BurgerMenuDrawer from "./components/BurgerMenuDrawer";
import LoginScreen from "./views/Login";
import OnboardGenreScreen from "./views/OnboardGenre";
import OnboardAuthorScreen from "./views/OnboardAuthor";
import HomeScreen from "./views/Home";
import BookScreen from "./views/Book";
import AuthorScreen from "./views/Author";
import GenreScreen from "./views/Genre";
import SearchScreen from "./views/Search";
import ExploreScreen from "./views/Explore";
import SettingsScreen from "./views/Settings";

import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

const OnboardStack = createStackNavigator(
  { OnboardGenreScreen, OnboardAuthorScreen, LoginScreen },
  { initialRouteName: "LoginScreen" }
);

const HomeStack = createStackNavigator(
  { HomeScreen, BookScreen, AuthorScreen, GenreScreen, SearchScreen },
  { initialRouteName: "HomeScreen" }
);

// TODO: Have to add more to the stack to both Explore Screen and Settings
const ExploreStack = createStackNavigator({ ExploreScreen });

const SettingsStack = createStackNavigator({ SettingsScreen });

const MainDrawer = createDrawerNavigator(
  { HomeStack, ExploreStack, SettingsStack },
  { contentComponent: BurgerMenuDrawer }
);

const RootSwitch = createSwitchNavigator(
  { OnboardStack, MainDrawer },
  { initialRouteName: "OnboardStack" }
);

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
