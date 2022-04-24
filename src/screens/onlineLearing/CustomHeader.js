import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          style={styles.icon}
          name="arrow-left-circle"
          size={30}
          color="#666"
        />
      </TouchableOpacity>

      <Text style={styles.text}>UI UX Design</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 100,
    borderRadius: 15,
  },
  text: {fontSize: 21, fontWeight: 'bold', color: '#222'},
});
export default CustomHeader;
