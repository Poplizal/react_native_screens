import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SignUp = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./assests/bg_img.jpg')}
      resizeMode="cover"
      style={styles.imageContainer}>
      <View style={styles.btn_group}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('signin');
          }}>
          <Text style={styles.btn_text}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.text}>|</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={(styles.btn_text, styles.active)}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.header_text}>Tell us about yourself</Text>
        <View style={styles.form}>
          <View style={styles.input_group}>
            {/* <Text style={styles.input_text}>icon</Text> */}
            <MaterialCommunityIcons
              style={styles.icon}
              name="email"
              size={30}
              color="#0a6600"
            />
            <TextInput style={styles.input} value="surfer123@gmail.com" />
          </View>
          <View style={styles.input_group}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={30}
              color="#0a6600"
            />
            <TextInput
              style={styles.input}
              placeholder="User Name ...."
              onChangeText={text => {
                console.log(text);
              }}
            />
          </View>
          <View style={styles.input_group}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock"
              size={30}
              color="#0a6600"
            />
            <TextInput style={styles.input} placeholder="Password ...." />
          </View>
          <View style={styles.input_group}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock-check"
              size={30}
              color="#0a6600"
            />
            <TextInput
              style={styles.input}
              placeholder="Re-enter Password ...."
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn_m}
          onPress={() => {
            console.log('you pressed sign up btn');
          }}
          activeOpacity={0.6}>
          <Text style={styles.btn_m_text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  btn_group: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    marginTop: 80,
  },
  btn: {marginHorizontal: 20},
  btn_text: {fontSize: 25, color: '#fff'},
  header_text: {
    fontSize: 25,
    color: '#0a6600',
    paddingBottom: 25,
  },
  text: {fontSize: 25, color: '#fff'},
  subContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: '83%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  form: {marginVertical: 15},
  input_group: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '10%',
    marginVertical: 13,
  },
  input_text: {
    width: '15%',
    fontSize: 17,
    color: '#666',
    fontWeight: '600',
  },
  input: {
    width: '85%',
    borderBottomWidth: 1,
    borderColor: '#888',
    fontSize: 17,
    fontWeight: '600',
    color: '#0a6600',
    paddingHorizontal: 10,
  },
  btn_m: {
    paddingHorizontal: 110,
    paddingVertical: 13,
    backgroundColor: '#f7dc0a',
    marginTop: 60,
    borderRadius: 30,
    // position: 'absolute',
    // bottom: 50,
  },
  btn_m_text: {fontSize: 20, fontWeight: '600', color: '#0a6600'},
  active: {color: '#f7dc0a', fontSize: 25},
  icon: {
    width: '15%',
  },
});

export default SignUp;
