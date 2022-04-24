import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

//import custom header
import CustomHeader from './components/CustomHeader';

//import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Search" iconName="cart-variant" />
      <View style={styles.search}>
        <TextInput style={styles.searchBox} placeholder="Vegetable" />
        <TouchableOpacity style={styles.close_btn}>
          <Icon name="close" size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={styles.des}>
        <Text style={styles.des_text}>Search result for 'vegetable'</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.items}>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/banana.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/strawberry.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/lemonte.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/fruFruit.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/strawberry.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/banana.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.img_container}>
              <Image
                style={styles.item_img}
                source={require('./assests/lemonte.png')}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.item_title}>Carrot</Text>
            <Text style={styles.item_category}>Fresh Fruits</Text>
            <View style={styles.item_footer}>
              <Text style={styles.price}>$15.25</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="plus"
                  size={21}
                  color="#fff"
                  style={styles.plus_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    width: '100%',
    backgroundColor: '#f0e9e9',
    paddingLeft: 20,
    paddingRight: 35,
    borderRadius: 5,
    fontSize: 17,
    marginVertical: 10,
  },
  close_btn: {position: 'absolute', right: 20},
  items: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    // paddingLeft: 10,
  },
  item: {
    width: '47.2%',
    borderRadius: 10,
    borderColor: '#e8e8e8',
    // borderColor: 'red',
    borderWidth: 1,
    // backgroundColor: 'red',
    padding: 10,
    // marginRight: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  des_text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item_img: {width: '100%', height: 130},
  img_container: {width: '100%', paddingHorizontal: 15},
  item_title: {fontSize: 20, fontWeight: '500', color: '#333'},
  item_category: {fontSize: 16, fontWeight: '400', color: '#666'},
  item_footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  price: {fontSize: 18, fontWeight: '500', color: '#222'},
  plus_icon: {backgroundColor: '#d60000', borderRadius: 5},
});
export default Search;
