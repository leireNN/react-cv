import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text } from 'react-native';

import InitialPage from '../InitialPage';
import AcademicDetails from '../AcademicDetails';

export default class Router extends Component {

  _handleNavigationRequest() {
    debugger;
    this.refs.nav.push({
      component: AcademicDetails,
      title: 'Genius',
      passProps: { myProp: 'genius' },
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: InitialPage,
          title: 'Foo This',
          passProps: { myProp: 'foo' },
          rightButtonTitle: 'Next',
          onRightButtonPress: () => this._handleNavigationRequest(),
        }}
        style={{flex: 1}}
      />
    );
  }
}
