import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SpashContainer } from '~/containers';

export default class ReactModoroNavigator extends Component {
  renderScene = (route, navigator) => {
    <SplashContainer navigator={navigator} />
  }
  configureScene = (route) => {

  }

  render () {
    return (
      <Navigator 
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}