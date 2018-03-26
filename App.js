import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import Weather from './src/Weather';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.containerMain}>
         <View style={{ height: 24, backgroundColor: '#512DA8', }} /> 
        <Header headerText="Header"/>
        <Weather/>
        <Footer footerText="Footer"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white'
  }
});
