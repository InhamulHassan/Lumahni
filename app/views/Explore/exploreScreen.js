import React, { Component } from "react";
import { ExploreView, ExploreText } from './styles';
import { FlatGrid } from "react-native-super-grid";

export default class ExploreScreen extends Component<Props> {
  render() {
    return (
        <ExploreView>
            <ExploreText>Explore</ExploreText>
        </ExploreView>
    );
  }
}
