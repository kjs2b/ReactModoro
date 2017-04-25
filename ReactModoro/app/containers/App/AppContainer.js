import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { ReactModoroNavigator } from '~/container';

export default class AppContainer extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <ReactModoroNavigator />
      </View>
    );
  }
}