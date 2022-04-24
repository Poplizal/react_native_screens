import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

// import icon from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader2 = ({title, bg = '#fff', icon}) => {
  return (
    <View style={[styles.header, {backgroundColor: bg}]}>
      <TouchableOpacity activeOpacity={0.5}>
        <Icon
          style={styles.icon}
          name={icon ? icon : 'less-than'}
          size={25}
          color="#7a1200"
        />
      </TouchableOpacity>

      <Text style={styles.text}>{title ? title : 'Title'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    padding: 7,
    backgroundColor: '#faeceb',
    borderRadius: 10,
    width: 40,
    marginRight: '25%',
  },

  text: {fontSize: 23, fontWeight: '600', color: '#222'},
  count: {
    position: 'absolute',
    top: 0,
    right: 3,
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
    backgroundColor: '#f71000',
    borderRadius: 20,
    paddingHorizontal: 2,
  },
});
export default CustomHeader2;
