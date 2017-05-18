import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

//Cosecha propia
import Colors from './common/colors.js';
import I18n from './common/i18n/i18n.js';

export default class AcademicDetails extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Academic data here...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBackground
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.darkBackground
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: Colors.darkBackground,
    fontFamily: 'Abel'
  },
  LanguageContainer: {
    flexDirection: 'row'
  },
  Icon: {
    width: 50,
    height: 50,
    margin: 10
  }
});
