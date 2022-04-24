import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//import custom header
import CustomHeader from './components/CustomHeader';

//import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Cart = () => {
  return (
    <View style={styles.container}>
      <CustomHeader icon_1_name="menu" icon_2_name="magnify" title="Cart" />
      <ScrollView style={styles.cartlist} showsVerticalScrollIndicator={false}>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/strawberry.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/lemonte.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/banana.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/fruFruit.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/strawberry.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/lemonte.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/banana.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/fruFruit.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart_item}>
          <View style={styles.image_container}>
            <Image
              style={styles.img}
              source={require('./assests/strawberry.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cart_item_des}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.weight}>3kg</Text>
            <Text style={styles.price}>$26.34</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="plus" color="#8c0700" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>3</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
              <Icon name="minus" color="#8c0700" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  cartlist: {paddingHorizontal: 10, marginTop: 15},
  cart_item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  image_container: {width: '30%', height: 110},
  img: {width: '100%', height: '100%'},

  title: {fontSize: 18, color: '#333', fontWeight: '500'},
  weight: {fontSize: 15, color: '#555', fontWeight: '400'},
  price: {fontSize: 16, color: '#333', fontWeight: '500'},

  counter: {
    backgroundColor: '#ffb8b8',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  count: {fontSize: 15, color: '#444', fontWeight: '500', marginVertical: 5},
});
export default Cart;
