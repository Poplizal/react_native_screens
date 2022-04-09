import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Welcome = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('main');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assests/undraw_Online_learning_re_qw08.png')}
        resizeMode="stretch"
      />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Learning everywhere</Text>
        <Text style={styles.text}>
          learn with pleasure with us, wherever you are
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('main');
          }}>
          <Text style={styles.btn_text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', padding: 15},
  image: {width: '100%', height: 400},
  subcontainer: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 25,
    padding: 50,
    marginTop: 10,
  },
  title: {fontSize: 25, color: '#006933', fontWeight: 'bold', marginTop: 10},
  text: {
    fontSize: 17,
    color: '#888',
    // backgroundColor: 'blue',
    textAlign: 'center',
    marginVertical: 20,
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#007d38',
    borderRadius: 10,
    marginTop: 20,
  },
  btn_text: {fontSize: 19, fontWeight: 'bold', color: '#fff'},
});
export default Welcome;
