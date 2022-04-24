import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import CustomHeader2 from './components/CustomHeader2';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <CustomHeader2 title="Notifications" />
      <View style={styles.subContainer}>
        <ScrollView
          style={styles.notifications}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Today</Text>
          <View style={styles.abouts}>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/star.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>
                  Rate your order experience
                </Text>
                <Text style={styles.noti_des}>
                  Please rate your experience...
                </Text>
                <Text style={styles.noti_date}>Today, 11:30 AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/done.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>Yay! Order complete</Text>
                <Text style={styles.noti_des}>Your orders is completed...</Text>
                <Text style={styles.noti_date}>Today, 11:20 AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/payment.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>Hurrah! Payment success</Text>
                <Text style={styles.noti_des}>
                  Payment process is completed...
                </Text>
                <Text style={styles.noti_date}>Today, 11:14 AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/complete.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>Complete your payment</Text>
                <Text style={styles.noti_des}>
                  Please complete your payment...
                </Text>
                <Text style={styles.noti_date}>Today, 11:10 AM</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Yesterday</Text>
          <View style={styles.abouts}>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/offer.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>Our offer</Text>
                <Text style={styles.noti_des}>
                  You will get 20% off from our...
                </Text>
                <Text style={styles.noti_date}>Yesterday, 05:15 PM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/close.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>Order canceled</Text>
                <Text style={styles.noti_des}>
                  Your order cancelation is completed...
                </Text>
                <Text style={styles.noti_date}>Yesterday, 07:46 PM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/done.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>
                  Rate your order experience
                </Text>
                <Text style={styles.noti_des}>
                  Please rate your experience...
                </Text>
                <Text style={styles.noti_date}>Today, 11:30 AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/done.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>
                  Rate your order experience
                </Text>
                <Text style={styles.noti_des}>
                  Please rate your experience...
                </Text>
                <Text style={styles.noti_date}>Today, 11:30 AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.about} activeOpacity={0.7}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./assests/done.png')}
                  style={styles.noti_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.des}>
                <Text style={styles.noti_title}>
                  Rate your order experience
                </Text>
                <Text style={styles.noti_des}>
                  Please rate your experience...
                </Text>
                <Text style={styles.noti_date}>Today, 11:30 AM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  subContainer: {
    width: '100%',
    height: '93.5%',
    // padding: 10,
    paddingHorizontal: 20,
  },
  title: {fontSize: 21, fontWeight: '500', color: '#555'},
  notifications: {width: '100%', marginTop: 20},
  abouts: {width: '100%', marginTop: 15, marginBottom: 20},
  about: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    // padding: 5,
    marginVertical: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginRight: 15,
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
  },
  noti_img: {
    width: '100%',
    height: '100%',
  },
  des: {},
  noti_title: {fontSize: 17, fontWeight: '500', color: '#444'},
  noti_des: {fontSize: 14, fontWeight: '400', color: '#777', marginVertical: 2},
  noti_date: {fontSize: 15, fontWeight: '500', color: '#444'},
});
export default Notifications;
