import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

// import icon from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.5}>
        <Icon style={styles.icon} name="home" size={30} color="#7a1200" />
      </TouchableOpacity>

      <Text style={styles.text}>Home</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={styles.profile}
          source={require('../assests/icons8-super-mario-50.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {padding: 7, backgroundColor: '#decfcc', borderRadius: 10},
  profile: {
    width: 45,
    height: 45,
    padding: 5,
    backgroundColor: '#decfcc',
    borderRadius: 10,
  },
  text: {fontSize: 25, fontWeight: '600', color: '#222'},
});
export default Header;
