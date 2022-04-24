import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

//import custom header
import CustomHeader from './components/CustomHeader';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Profile" icon_2_name="lead-pencil" />
      <View style={styles.subContainer}>
        <View style={styles.profile_info}>
          {/* <View style={styles.imageContainer}> */}
          <Image
            style={styles.img}
            source={require('./assests/profile.png')}
            resizeMode="contain"
          />
          {/* </View> */}
          <Text style={styles.user_name}>Michael Thomas</Text>
          <Text style={styles.name}>@michael</Text>
        </View>
        <View style={styles.user_action_navigator}>
          <TouchableOpacity
            style={styles.user_action_navigator_btn}
            activeOpacity={0.6}>
            <Icon
              style={styles.user_action_navigator_btn_icon}
              name="order-bool-ascending-variant"
              size={25}
              color="#555"
            />
            <Text style={styles.user_action_navigator_btn_text}>My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.user_action_navigator_btn}
            activeOpacity={0.6}>
            <Icon
              style={styles.user_action_navigator_btn_icon}
              name="credit-card-outline"
              size={25}
              color="#555"
            />
            <Text style={styles.user_action_navigator_btn_text}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.user_action_navigator_btn}
            activeOpacity={0.6}>
            <Icon
              style={styles.user_action_navigator_btn_icon}
              name="map-marker-outline"
              size={25}
              color="#555"
            />
            <Text style={styles.user_action_navigator_btn_text}>Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editors}>
          <TouchableOpacity activeOpacity={0.7} style={styles.editor}>
            <View style={styles.editor_des}>
              <Icon
                style={styles.editor_icon}
                name="account-outline"
                size={25}
                color="#555"
              />

              <Text style={styles.editor_title}>User Details</Text>
            </View>
            <TouchableOpacity activeOpacity={0.3}>
              <Icon
                style={styles.more_icon}
                name="greater-than"
                size={25}
                color="#555"
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editor} activeOpacity={0.7}>
            <View style={styles.editor_des}>
              <Icon
                style={styles.editor_icon}
                name="cog-outline"
                size={25}
                color="#555"
              />
              <Text style={styles.editor_title}>Settings</Text>
            </View>
            <TouchableOpacity activeOpacity={0.3}>
              <Icon
                style={styles.more_icon}
                name="greater-than"
                size={25}
                color="#555"
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editor} activeOpacity={0.7}>
            <View style={styles.editor_des}>
              <Icon
                style={styles.editor_icon}
                name="message-processing-outline"
                size={25}
                color="#555"
              />
              <Text style={styles.editor_title}>Help & Support</Text>
            </View>
            <TouchableOpacity activeOpacity={0.3}>
              <Icon
                style={styles.more_icon}
                name="greater-than"
                size={25}
                color="#555"
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editor} activeOpacity={0.7}>
            <View style={styles.editor_des}>
              <Icon
                style={styles.editor_icon}
                name="web"
                size={25}
                color="#555"
              />
              <Text style={styles.editor_title}>Change Language</Text>
            </View>
            {/* <Icon
              style={styles.more_icon}
              name="greater-than"
              size={25}
              color="#555"
            /> */}
            <TouchableOpacity activeOpacity={0.3}>
              <Image
                style={styles.flag}
                source={require('./assests/malaysia.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editor} activeOpacity={0.7}>
            <View style={styles.editor_des}>
              <Icon
                style={styles.editor_icon}
                name="logout"
                size={25}
                color="#555"
              />
              <Text style={styles.editor_title}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  subContainer: {width: '100%', height: '100%', padding: 10},
  //profile
  profile_info: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 25,
    // backgroundColor: 'red',
  },
  img: {width: 120, height: 120},
  user_name: {fontSize: 21, fontWeight: '500', color: '#333'},
  name: {fontSize: 15, fontWeight: '500', color: '#888'},

  //user_action_navigator
  user_action_navigator: {
    width: '100%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingVertical: 20,
    backgroundColor: '#ffe9e8',
    borderRadius: 15,
    marginBottom: 15,
  },
  user_action_navigator_btn: {alignItems: 'center'},
  user_action_navigator_btn_icon: {marginBottom: 5},
  user_action_navigator_btn_text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
  },

  editors: {width: '100%', marginTop: 20},
  editor: {
    width: '100%',
    padding: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  editor_des: {flexDirection: 'row', alignItems: 'center'},
  editor_title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#555',
    marginLeft: 15,
  },
  editor_icon: {backgroundColor: '#dedede', padding: 5, borderRadius: 10},
  flag: {width: 35, height: 35},
});

export default Profile;
