import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import custom header
import CustomHeader from './CustomHeader';

const Details = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assests/undraw_Pair_programming_re_or4x.png')}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.des}>
        <Text style={styles.title}>Figma UI UX Design Essentials</Text>
        <Text style={styles.text}>
          Created by <Text style={styles.author}>Sameir Sarker</Text>
        </Text>
        <View style={styles.des_details}>
          <View style={styles.des_sub_details}>
            <Text style={styles.des_sub_details_text}>
              <Icon name="star" size={21} /> 4.8
            </Text>
            <Text style={styles.des_sub_details_text}>
              <Icon name="clock" size={21} /> 72 Hours
            </Text>
          </View>
          <Text style={styles.price}>$40</Text>
        </View>
      </View>

      <View style={styles.btn_group}>
        <TouchableOpacity style={styles.btn_list} activeOpacity={0.7}>
          <Text style={styles.btn_text}>PlayList(22)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_des} activeOpacity={0.7}>
          <Text style={styles.btn_text}>Description</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.playList} showsVerticalScrollIndicator={false}>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>

            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Introduction</Text>
              <Text style={styles.duration}>2 Min 10 Sec</Text>
            </View>
          </View>
          <Icon
            style={styles.statusIcon}
            name="check"
            size={20}
            color="green"
          />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>What is UI UX design</Text>
              <Text style={styles.duration}>10 Min 45 Sec</Text>
            </View>
          </View>
          <Icon style={styles.statusIcon} name="lock" size={20} color="red" />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>How to make wireframe</Text>
              <Text style={styles.duration}>22 Min 58 Sec</Text>
            </View>
          </View>
          <Icon style={styles.statusIcon} name="lock" size={20} color="red" />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Your first design</Text>
              <Text style={styles.duration}>10 Min 5 Sec</Text>
            </View>
          </View>
          <Icon style={styles.statusIcon} name="lock" size={20} color="red" />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Introduction</Text>
              <Text style={styles.duration}>2 Min 10 Sec</Text>
            </View>
          </View>
          <Icon
            style={styles.statusIcon}
            name="check"
            size={20}
            color="green"
          />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Introduction</Text>
              <Text style={styles.duration}>2 Min 10 Sec</Text>
            </View>
          </View>
          <Icon
            style={styles.statusIcon}
            name="check"
            size={20}
            color="green"
          />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Introduction</Text>
              <Text style={styles.duration}>2 Min 10 Sec</Text>
            </View>
          </View>
          <Icon
            style={styles.statusIcon}
            name="check"
            size={20}
            color="green"
          />
        </View>
        <View style={styles.list_item}>
          <View style={styles.playGroup}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon
                style={styles.playIcon}
                name="play"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.list_texts}>
              <Text style={styles.list_title}>Introduction</Text>
              <Text style={styles.duration}>2 Min 10 Sec</Text>
            </View>
          </View>
          <Icon
            style={styles.statusIcon}
            name="check"
            size={20}
            color="green"
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn_save} activeOpacity={0.8}>
          <Icon name="content-save-all-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_enroll} activeOpacity={0.8}>
          <Text style={styles.btn_text}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', padding: 15, height: '100%'},
  image: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 15,
    marginBottom: 10,
  },
  title: {fontSize: 21, fontWeight: 'bold', color: '#222', marginBottom: 10},
  text: {fontSize: 15, fontWeight: 'bold', color: '#222'},
  author: {color: 'green'},
  des_details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  des_sub_details: {flexDirection: 'row'},
  des_sub_details_text: {fontSize: 13, marginRight: 10},
  price: {fontSize: 20, fontWeight: 'bold', color: 'green'},

  //btn group
  btn_group: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  btn_list: {
    width: '45%',
    backgroundColor: 'blue',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btn_des: {
    width: '45%',
    backgroundColor: 'green',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btn_text: {fontSize: 16, color: '#fff', fontWeight: 'bold'},

  //play list
  playList: {width: '100%', height: 215},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  playGroup: {flexDirection: 'row', alignItems: 'center'},
  list_title: {fontSize: 18, fontWeight: 'bold', color: '#222'},
  list_texts: {marginLeft: 10},
  duration: {fontSize: 14, color: '#666', fontWeight: '600'},
  playIcon: {backgroundColor: 'green', padding: 6, borderRadius: 50},
  statusIcon: {backgroundColor: '#fff', padding: 3, borderRadius: 50},

  //footer
  footer: {
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 15,
    marginTop: 10,
  },
  btn_save: {
    backgroundColor: '#b88d00',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  btn_enroll: {
    backgroundColor: '#008f21',
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 15,
  },
});
export default Details;
