import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Welcome = () => {
  return (
    <ImageBackground
      source={require('./assests/pexels-nextvoyage-1461974.jpg')}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Explore Beautiful and Amazing Places</Text>
        <Text style={styles.desc}>
          Discover beautiful places around you and enjoy the breathtaking view
          of nature
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    padding: 15,
    // backgroundColor: 'black',
    paddingTop: '100%',
  },
  title: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    // backgroundColor: 'red',
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',
    // backgroundColor: 'red',
  },
  btn: {
    width: '100%',
    backgroundColor: '#0009ab',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 90,
  },
  btn_text: {
    fontSize: 19,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Welcome;
