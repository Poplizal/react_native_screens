import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//import Custom header
import CustomHeader from './components/CustomHeader';

// import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Checkout" icon_2_name="cart-outline" count={6} />
      <View style={styles.subContainer}>
        <View style={styles.items}>
          <ScrollView>
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
        <View style={styles.checkout_des}>
          <Text style={styles.checkout_des_title}>Order Info</Text>
          <View style={styles.sub_des}>
            <Text style={styles.key}>Subtotal</Text>
            <Text style={styles.value}>$89.54</Text>
          </View>
          <View style={styles.sub_des}>
            <Text style={styles.key}>Delivery fee</Text>
            <Text style={styles.value}>$89.54</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.sub_des}>
            <Text style={styles.key}>Total</Text>
            <Text style={styles.total_value}>$89.54</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
          <Text style={styles.btn_text}>Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  subContainer: {width: '100%', height: '100%', padding: 10},
  items: {width: '100%', height: '52%', marginTop: 10},
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
  checkout_des: {
    width: '100%',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    marginVertical: 10,
    marginBottom: '22%',
    // backgroundColor: 'red',
  },
  checkout_des_title: {fontSize: 23, fontWeight: '600', color: '#444'},
  key: {fontSize: 18, fontWeight: '500', color: '#777'},
  value: {fontSize: 19, fontWeight: '500', color: '#777'},
  total_value: {fontSize: 22, fontWeight: '600', color: '#444'},
  sub_des: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  line: {borderBottomWidth: 1, borderColor: '#cfcfcf', marginVertical: 7},
  btn: {
    width: '100%',
    backgroundColor: '#d90000',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btn_text: {fontSize: 19, fontWeight: '600', color: '#fff'},
});
export default Checkout;
