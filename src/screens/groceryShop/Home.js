import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// import icon from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import custom component
import Header from './components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchBar}>
        <Text style={styles.title}>Let's find best food here</Text>
        <TextInput style={styles.input} placeholder="Search now ..." />
      </View>
      <View style={styles.categories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.category} activeOpacity={0.7}>
            <Text style={[styles.category_text, styles.active_category]}>
              Fruits
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} activeOpacity={0.7}>
            <Text style={styles.category_text}>Vegetable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} activeOpacity={0.7}>
            <Text style={styles.category_text}>Bakery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} activeOpacity={0.7}>
            <Text style={styles.category_text}>Fast Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} activeOpacity={0.7}>
            <Text style={styles.category_text}>Drinks</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={styles.items}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
          <Image
            style={styles.item_img}
            source={require('./assests/fruFruit.png')}
            resizeMode="contain"
          />
          <View style={styles.item_des}>
            <Text style={styles.item_title}>KwalGawThee</Text>
            <Text style={styles.item_text}>Fresh Fruits</Text>
            <View style={styles.dealing}>
              <Text style={styles.item_price}>$15.25</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addToCartIcon}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveIcon}>
            <Icon name="bookmark-outline" size={25} color="#de0013" />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
          <Image
            style={styles.item_img}
            source={require('./assests/strawberry.png')}
            resizeMode="contain"
          />
          <View style={styles.item_des}>
            <Text style={styles.item_title}>Strawberry</Text>
            <Text style={styles.item_text}>Fresh Fruits</Text>
            <View style={styles.dealing}>
              <Text style={styles.item_price}>$6.2</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addToCartIcon}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveIcon}>
            <Icon name="bookmark" size={25} color="#de0013" />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
          <Image
            style={styles.item_img}
            source={require('./assests/lemonte.png')}
            resizeMode="contain"
          />
          <View style={styles.item_des}>
            <Text style={styles.item_title}>Lemomte</Text>
            <Text style={styles.item_text}>Fresh Fruits</Text>
            <View style={styles.dealing}>
              <Text style={styles.item_price}>$13.10</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addToCartIcon}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveIcon}>
            <Icon name="bookmark" size={25} color="#de0013" />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
          <Image
            style={styles.item_img}
            source={require('./assests/banana.png')}
            resizeMode="contain"
          />
          <View style={styles.item_des}>
            <Text style={styles.item_title}>Banana</Text>
            <Text style={styles.item_text}>Fresh Fruits</Text>
            <View style={styles.dealing}>
              <Text style={styles.item_price}>$4.05</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addToCartIcon}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveIcon}>
            <Icon name="bookmark-outline" size={25} color="#de0013" />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
          <Image
            style={styles.item_img}
            source={require('./assests/strawberry.png')}
            resizeMode="contain"
          />
          <View style={styles.item_des}>
            <Text style={styles.item_title}>Strawberry</Text>
            <Text style={styles.item_text}>Fresh Fruits</Text>
            <View style={styles.dealing}>
              <Text style={styles.item_price}>$6.2</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addToCartIcon}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveIcon}>
            <Icon name="bookmark" size={25} color="#de0013" />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', paddingHorizontal: 15},
  //searchBar
  searchBar: {
    width: '100%',
    marginVertical: 25,
  },
  title: {fontSize: 24, fontWeight: '600', color: '#222'},
  input: {
    backgroundColor: '#e8e6e6',
    borderRadius: 10,
    paddingHorizontal: 20,
    // paddingVertical: 5,
    fontSize: 19,
    marginTop: 15,
  },
  //category
  categories: {
    width: '100%',
    marginBottom: 20,
    // backgroundColor: 'blue',
  },
  category: {paddingRight: 35},
  category_text: {fontSize: 21, color: '#888', fontWeight: '500'},
  active_category: {color: '#912200'},

  //items
  items: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    width: '47%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#f0edee',
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 5,
  },
  item_img: {width: 150, height: 120},
  item_des: {width: '100%'},
  item_title: {fontSize: 19, fontWeight: '500', color: '#222'},
  item_text: {fontSize: 15, fontWeight: '400', color: '#666'},
  dealing: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item_price: {fontSize: 23, fontWeight: '500', color: '#222'},
  addToCartIcon: {padding: 5, backgroundColor: '#de0013', borderRadius: 10},
  saveIcon: {
    padding: 5,
    backgroundColor: '#decfcc',
    borderRadius: 10,
    // width: 60,
    // height: 60,
    // alignItems: 'center',
    width: 35,
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#de0013',
  },
});
export default Home;

//     <TouchableOpacity activeOpacity={0.6}>  <Icon
//     style={styles.saveIcon}
//     name="bookmark"
//     size={25}
//     color="#fff"
//   /></TouchableOpacity>;
