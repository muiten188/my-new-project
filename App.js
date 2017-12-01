import Expo from "expo";
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
    return (
      <Expo.AppLoading />
    );
    }
    return (
      <Index />
    );
  }
}