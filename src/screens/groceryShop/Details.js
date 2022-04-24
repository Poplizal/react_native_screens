import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

// import icon from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import custom header
import CustomHeader from './components/CustomHeader';

const screensHeight = Dimensions.get('window').height;
const Details = () => {
  console.log(screensHeight);
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomHeader />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./assests/strawberry.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.amount}>
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              style={styles.reduce_btn}
              name="minus"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.count}>1 Kg</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              style={styles.increase_btn}
              name="plus"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.des}>
          <View style={styles.des_fr}>
            <Text style={styles.title}>Strawberry</Text>
            <Text style={styles.des_price}>
              $15.20<Text style={{fontSize: 16, color: '#666'}}>/kg</Text>
            </Text>
          </View>
          <View style={styles.des_se}>
            <Text style={styles.text}>Availiable in stock</Text>
            <View style={styles.rating}>
              <Icon
                style={styles.starIcon}
                name="star"
                size={21}
                color="#c7ba00"
              />
              <Text style={styles.rating_text}>4.8</Text>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Details</Text>
          <View style={styles.details_des}>
            <Text style={styles.text}>
              The garden strawberry is widely grown hybrid species of ther genus
              Fragaria and collectively known as the strawberries, which ...
            </Text>
            <TouchableOpacity style={styles.read_more_btn} activeOpacity={0.7}>
              <Text style={styles.read_more_text}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Details</Text>
          <View style={styles.details_des}>
            <Text style={styles.text}>
              The garden strawberry is widely grown hybrid species of ther genus
              Fragaria and collectively known as the strawberries, which ...
            </Text>
            <TouchableOpacity style={styles.read_more_btn} activeOpacity={0.7}>
              <Text style={styles.read_more_text}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Details</Text>
          <View style={styles.details_des}>
            <Text style={styles.text}>
              The garden strawberry is widely grown hybrid species of ther genus
              Fragaria and collectively known as the strawberries, which ...
            </Text>
            <TouchableOpacity style={styles.read_more_btn} activeOpacity={0.7}>
              <Text style={styles.read_more_text}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.related_items}>
          <Text style={styles.title}>Related Fruits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/lemonte.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/banana.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/fruFruit.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/strawberry.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/lemonte.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/fruFruit.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.related_item} activeOpacity={0.8}>
              <Image
                style={styles.related_item_img}
                source={require('./assests/banana.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.addToCart}>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
          <Text style={styles.btn_text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  imageContainer: {
    paddingVertical: 40,
    backgroundColor: '#ffc8c4',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  image: {
    width: '100%',
    height: 150,
    // marginVertical: 15,
  },
  amount: {
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reduce_btn: {
    backgroundColor: '#a6a6a6',
    padding: 5,
    borderRadius: 10,
  },
  count: {
    marginHorizontal: 15,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
  },
  increase_btn: {
    backgroundColor: '#ba0c00',
    padding: 5,
    borderRadius: 10,
  },
  des: {width: '100%', paddingHorizontal: 10},
  des_fr: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
  },
  des_se: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {fontSize: 21, fontWeight: '500', color: '#222', marginBottom: 10},
  text: {fontSize: 15, fontWeight: '400', color: '#666'},
  des_price: {fontSize: 21, fontWeight: '400', color: '#ba0c00'},
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {width: '100%', padding: 10},
  read_more_text: {fontSize: 17, fontWeight: '500', color: '#00679e'},
  read_more_btn: {},

  // related fruits
  related_items: {width: '100%', paddingHorizontal: 10, marginBottom: 100},
  related_item: {
    width: 60,
    marginRight: 10,
    height: 60,
    backgroundColor: '#ffcbc2',
    borderRadius: 10,
    padding: 2,
  },
  related_item_img: {height: '100%', width: '100%'},
  addToCart: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    backgroundColor: '#cf1f00',
    paddingVertical: 15,
    paddingHorizontal: '35%',
    borderRadius: 10,
  },
  btn_text: {fontSize: 18, fontWeight: '500', color: '#fff'},
});
export default Details;
