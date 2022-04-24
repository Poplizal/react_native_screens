import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./assests/food.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Buy Your Daily <Text style={styles.specialText}>Grocery</Text> Easily
        </Text>
        <Text style={styles.des}>
          The easiest way to share your family's grocery shopping-Try it out.
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Let's Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  imageContainer: {
    width: '100%',
    height: '55%',
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    backgroundColor: 'green',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '45%',
    paddingVertical: 20,
    alignItems: 'center',
    // textAlign: 'center',
    paddingHorizontal: 20,
  },
  title: {fontSize: 35, fontWeight: 'bold', color: '#222'},
  specialText: {color: 'coral'},
  des: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 60,
  },
  btn: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 15,
  },
  btn_text: {fontSize: 20, fontWeight: '500', color: '#fff'},
});
export default Welcome;
