import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

//import icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Custom header
import CustomHeader2 from './components/CustomHeader2';

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <CustomHeader2 title="Order Details" />
      <View style={styles.subContainer}>
        <Text style={styles.des}>
          Please check your order status to get the item deliveried to your home
        </Text>
        <View style={styles.step}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./assests/done.png')}
            />
          </View>
          <View style={styles.step_des}>
            <View style={styles.des_details}>
              <Text style={styles.des_title}>Order Confirmed</Text>
              <Text style={styles.des_date}>Feb 22, 2022</Text>
            </View>
            <Text style={styles.des_time}>11.10 AM</Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./assests/payment.png')}
            />
          </View>
          <View style={styles.step_des}>
            <View style={styles.des_details}>
              <Text style={styles.des_title}>Payment</Text>
              <Text style={styles.des_date}>Feb 22, 2022</Text>
            </View>
            <Text style={styles.des_time}>11.14 AM</Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./assests/star.png')}
            />
          </View>
          <View style={styles.step_des}>
            <View style={styles.des_details}>
              <Text style={styles.des_title}>Order On Process</Text>
              <Text style={styles.des_date}>Feb 22, 2022</Text>
            </View>
            <Text style={styles.des_time}>11.20 AM</Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./assests/shipping.png')}
            />
          </View>
          <View style={styles.step_des}>
            <View style={styles.des_details}>
              <Text style={styles.des_title}>Order Shipped</Text>
              <Text style={styles.des_date}>Feb 23, 2022</Text>
            </View>
            <Text style={styles.des_time}>10.00 AM</Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./assests/order_received.png')}
            />
          </View>
          <View style={styles.step_des}>
            <View style={styles.des_details}>
              <Text style={styles.des_title}>Order Received</Text>
              <Text style={styles.des_date}>Pending...</Text>
            </View>
            <Text style={styles.des_time}>Pending...</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  subContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    paddingHorizontal: 15,
  },
  des: {fontSize: 15, fontWeight: '500', color: '#444', marginVertical: 15},
  imageContainer: {
    width: 35,
    height: 35,
    padding: 5,
    backgroundColor: '#e8e8e8',
    borderRadius: 15,
  },
  image: {width: '100%', height: '100%'},
  step: {
    flexDirection: 'row',
    // paddingHorizontal: 20,
    // backgroundColor: 'blue',
    padding: 10,
    paddingVertical: 20,
    // marginVertical: 10,
    // borderLeftWidth: 1,
    // borderLeftColor: 'red',
  },
  step_des: {
    width: '85%',
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  des_title: {fontSize: 21, color: '#333', fontWeight: '600', marginBottom: 5},
  des_date: {fontSize: 15, color: '#777', fontWeight: '400'},
  des_time: {fontSize: 15, color: '#777', fontWeight: '400'},

  btn: {
    width: '90%',
    backgroundColor: '#e30000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '25%',
  },
  btn_text: {fontSize: 19, fontWeight: '500', color: '#fff'},
});
export default OrderDetails;
