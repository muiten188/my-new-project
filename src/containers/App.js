import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import AuthenNavigation from '../routers/authen_navigation';
import RootNavigaion from '../routers/root_navigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loged: false
    }
  }

  render() {
    if (!this.state.loged) {
      return (
        <AuthenNavigation />
      )
    }
    return (
      <RootNavigaion />
    );
  }

}
