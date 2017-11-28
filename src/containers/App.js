  import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import RootNavigaion from '../routers/root_navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RootNavigaion />
    );
  }
}
