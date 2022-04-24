import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation, barColor}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* //header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Hello Morenike</Text>
              <Text style={styles.desc}>Explore amazing places today</Text>
            </View>
            <Image
              style={styles.image}
              source={require('./assests/pexels-andrea-piacquadio-839011.jpg')}
            />
          </View>
          {/* //benner  */}
          <View style={styles.benner}>
            <Image
              style={styles.benner_image}
              source={require('./assests/pexels-vincent-gerbouin-1174732.jpg')}
              resizeMode="cover"
            />
            <Text style={styles.benner_text}>
              Maldive Island for you and your loved ones
            </Text>
          </View>
          {/* categroy  */}
          <View style={styles.category}>
            <Text style={styles.title}>Category</Text>
            <ScrollView
              style={styles.category_container}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View style={styles.category_item}>
                <Image
                  style={styles.category_image}
                  source={require('./assests/undraw_Beach_rvmg.png')}
                  resizeMode="cover"
                />
                <Text style={styles.category_title}>Beach</Text>
              </View>

              <View style={styles.category_item}>
                <Image
                  style={styles.category_image}
                  source={require('./assests/undraw_Photo_re_5blb.png')}
                  resizeMode="cover"
                />
                <Text style={styles.category_title}>Mountain</Text>
              </View>

              <View style={styles.category_item}>
                <Image
                  style={styles.category_image}
                  source={require('./assests/undraw_quite_town_mg2q.png')}
                  resizeMode="cover"
                />
                <Text style={styles.category_title}>Hotel</Text>
              </View>

              <View style={styles.category_item}>
                <Image
                  style={styles.category_image}
                  source={require('./assests/undraw_Building_re_xfcm.png')}
                  resizeMode="cover"
                />
                <Text style={styles.category_title}>Meseum</Text>
              </View>

              <View style={styles.category_item}>
                <Image
                  style={styles.category_image}
                  source={require('./assests/undraw_Beach_rvmg.png')}
                  resizeMode="cover"
                />
                <Text style={styles.category_title}>Beach</Text>
              </View>
            </ScrollView>
          </View>
          {/* recommend  */}
          <View style={styles.recommend}>
            <Text style={styles.title}>Popular Places</Text>
            <ScrollView
              style={styles.recommend_container}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={styles.recommend_item}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('details');
                }}>
                <Image
                  style={styles.recommend_image}
                  source={require('./assests/pexels-vincent-gerbouin-1174732.jpg')}
                  resizeMode="cover"
                />
                <Text style={styles.recommend_title}>Anse Source d'Argent</Text>
                <Text style={styles.location}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={17}
                    color="blue"
                  />
                  Seychells
                </Text>
                <Text style={styles.price}>$0.00</Text>
              </TouchableOpacity>

              <View style={styles.recommend_item}>
                <Image
                  style={styles.recommend_image}
                  source={require('./assests/pexels-tom-fisk-3995803.jpg')}
                  resizeMode="cover"
                />
                <Text style={styles.recommend_title}>Matterhorn</Text>
                <Text style={styles.location}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={17}
                    color="blue"
                  />
                  Switerzerland
                </Text>
                <Text style={styles.price}>$0.00</Text>
              </View>

              <View style={styles.recommend_item}>
                <Image
                  style={styles.recommend_image}
                  source={require('./assests/pexels-james-owen-4219366.jpg')}
                  resizeMode="cover"
                />
                <Text style={styles.recommend_title}>Anse Source d'Argent</Text>
                <Text style={styles.location}>
                  {' '}
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={17}
                    color="blue"
                  />
                  Seychells
                </Text>
                <Text style={styles.price}>$0.00</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  //header
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 17,
    fontWeight: '500',
  },
  // benner
  benner: {width: '100%', marginBottom: 20},
  benner_image: {width: '100%', height: 150, borderRadius: 10},
  benner_text: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 40,
  },
  //Category
  category: {width: '100%', marginBottom: 15},
  category_container: {width: '100%', marginTop: 15},
  category_item: {alignItems: 'center', marginHorizontal: 10},
  category_image: {width: 90, height: 90, borderRadius: 20, marginBottom: 8},
  category_title: {fontSize: 18, fontWeight: 'bold'},

  //Recommend
  recommend: {width: '100%'},
  recommend_container: {width: '100%', marginTop: 10},
  recommend_item: {padding: 15, borderColor: '#dfe0dc', borderWidth: 1},
  recommend_image: {width: 200, height: 150},
  recommend_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  location: {fontWeight: '400'},
  price: {fontSize: 21, fontWeight: 'bold', color: '#222', paddingLeft: 120},
});
export default Home;
