import React, { Component } from "react";
import { SettingsView, SettingsText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class SettingsScreen extends Component<Props> {
  render() {
    return (
        <SettingsView>
            <SettingsText>Settings</SettingsText>
        </SettingsView>
    );
  }
}
