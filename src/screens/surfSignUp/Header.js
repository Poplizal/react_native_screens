import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

//import navigation
import {useNavigation} from '@react-navigation/native';
//import icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, name, home}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialCommunityIcons
          name={name == null ? 'keyboard-backspace' : name}
          size={30}
          color="#0a6600"
        />
      </TouchableOpacity> */}

      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        onPress={() => {
          navigation.navigate('welcome');
        }}
        name={home == null ? 'home' : home}
        size={30}
        color="#0a6600"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0a6600',
  },
});

export default Header;
