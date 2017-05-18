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
import AcademicDetails from './AcademicDetails.js';

export default class CV extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  // _handleBackPress() {
  //   this.props.navigator.pop();
  // }
  //
  // _handleNextPress(nextRoute) {
  //   this.props.navigator.push(nextRoute);
  // }

  render() {

    // const nextRoute = {
    //   component: AcademicDetails,
    //   title: 'Bar That',
    //   passProps: { myProp: 'bar' }
    // };

    return (
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require('../assets/images/photo.png')}/>
        <Text style={styles.welcome}>
          Welcome to my CV!
        </Text>
        <Text style={styles.welcome}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          {I18n.t('engineer')}
        </Text>

        <View style={styles.LanguageContainer}>
          <TouchableHighlight
            onPressIn={this.changeLanguage('es')}>
            <Image
              style={styles.Icon}
              source={require('../assets/images/es.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPressIn={I18n.setLocale('en')}>
            <Image
              style={styles.Icon}
              source={require('../assets/images/en.jpg')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  changeLanguage (lang) {
    console.log("Click on flag");
    I18n.setLocale(lang);
  }
}

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
