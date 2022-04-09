import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.subTitle}>Good Morning</Text>
          </View>
          <TextInput
            style={styles.search}
            placeholder="Search your topic"
            //   onChangeText={(value) => {
            //     console.log(value);
            //   }}
          />
        </View>
        <View style={styles.category}>
          <View style={styles.category_header}>
            <Text style={styles.category_header_title}>Categories</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={{color: '#006933', fontSize: 16}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity
              style={styles.category_item}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('details');
              }}>
              <Text style={styles.category_title}>Graphic Design</Text>
              <Text style={styles.category_des}>20 Courses</Text>
              <Image
                style={styles.category_image}
                source={require('./assests/undraw_design_tools_42tf.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.category_item}>
              <Text style={styles.category_title}>Programming</Text>
              <Text style={styles.category_des}>18 Courses</Text>
              <Image
                style={styles.category_image}
                source={require('./assests/undraw_Pair_programming_re_or4x.png')}
              />
            </View>
            <View style={styles.category_item}>
              <Text style={styles.category_title}>Finance</Text>
              <Text style={styles.category_des}>9 Courses</Text>
              <Image
                style={styles.category_image}
                source={require('./assests/undraw_Investing_re_bov7.png')}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('details');
              }}
              style={styles.category_item}>
              <Text style={styles.category_title}>UI/UX Design</Text>
              <Text style={styles.category_des}>22 Courses</Text>
              <Image
                style={styles.category_image}
                source={require('./assests/undraw_Designer_life_re_6ywf.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  image: {width: '100%', height: 400},
  subcontainer: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 25,
    padding: 50,
  },
  textContainer: {width: '90%', marginBottom: 40},
  title: {fontSize: 25, color: '#fff', fontWeight: 'bold'},
  category_header_title: {fontSize: 22, color: '#222', fontWeight: 'bold'},
  category_header: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  subTitle: {fontSize: 22, color: '#fff', fontWeight: '400'},
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
  header: {
    width: '100%',
    padding: 25,
    backgroundColor: '#006933',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    alignItems: 'center',
  },
  search: {
    width: '90%',
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    fontSize: 17,
    backgroundColor: '#fff',
  },
  //categories
  categories: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: 'blue',
    // height: '100%',
  },
  category_item: {
    padding: 10,
    paddingVertical: 20,
    borderWidth: 2,
    // color: '#fafafa',
    width: '43%',
    // flex: 1,
    alignItems: 'center',
    borderColor: '#ededed',
    borderRadius: 15,
    margin: 10,
    // backgroundColor: 'red',
  },
  category_image: {width: 150, height: 100, marginTop: 25},
  category_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 5,
  },
  category_des: {fontSize: 12, fontWeight: '400', color: '#666'},
});
export default Home;
