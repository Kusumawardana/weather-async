import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=f2e294abc15c9b736cbda67d6b743483&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center' }}> Masukan Nama Kota </Text>
          <TextInput style={{ height: 40 }}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Find"
              color="#673AB7"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>
      <View style={[styles.box1, styles.atas]}>
        <View style={styles.button}>
          <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={tempIcon} style={styles.icon} />
          </View>
          <Text> Temp : {'\n'} { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={mainIcon} style={styles.icon} />
          </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main Desc : {'\n'} { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunrise : {'\n'} { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunset : {'\n'} { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Pressure : {'\n'} { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Humidity : {'\n'} { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Sea Level : {'\n'} { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Ground Level : {'\n'} { this.state.forecast.grnd_level} </Text>
        </View>
      </View>
      <View style={[styles.box1, styles.bawah]}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={windIcon} style={styles.icon} />
       </View>
          <Text> Wind Speed : {'\n'} { this.state.forecast.speed} </Text>
        </View>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    flexDirection: 'column'
  },
  box2: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  box1: {
    flex: 0.3,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 140,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderColor: '#3498db',
    borderWidth: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 40,
    width: 30,

  },
  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
  },
  atas: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  bawah: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10
  }
});
