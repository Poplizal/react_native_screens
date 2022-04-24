import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

// import icon from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({
  title,
  bg = '#fff',
  icon_1_name,
  icon_2_name,
  count,
}) => {
  return (
    <View style={[styles.header, {backgroundColor: bg}]}>
      <TouchableOpacity activeOpacity={0.5}>
        <Icon
          style={styles.icon}
          name={icon_1_name ? icon_1_name : 'less-than'}
          size={25}
          color="#7a1200"
        />
      </TouchableOpacity>

      <Text style={styles.text}>{title ? title : 'Title'}</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Icon
          style={styles.icon}
          name={icon_2_name ? icon_2_name : 'menu'}
          size={25}
          color="#7a1200"
        />
        {count ? <Text style={styles.count}> {count}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    // marginBottom: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    padding: 7,
    backgroundColor: '#faeceb',
    borderRadius: 10,
    // marginRight: '20%',
    width: 40,
  },

  profile: {
    width: 45,
    height: 45,
    padding: 5,
    backgroundColor: '#decfcc',
    borderRadius: 10,
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
export default CustomHeader;
