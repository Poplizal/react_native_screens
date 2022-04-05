import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('./assests/bg_img.jpg')}
      resizeMode="cover">
      <Text style={styles.StyleText}>W A V E T R A C K</Text>
      <View style={styles.btn_group}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('signin');
          }}>
          <Text style={styles.btn_text}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.btn_text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 100,
  },
  text: {fontSize: 20},
  btn_group: {
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: 90,
    paddingVertical: 15,
    backgroundColor: '#f7dc0a',
    marginVertical: 10,
    borderRadius: 30,
  },
  btn_text: {fontSize: 25, color: '#008229', fontWeight: '500'},
});

export default Welcome;
