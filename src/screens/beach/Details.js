import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

//import icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.main_image}
            source={require('./assests/pexels-asad-photo-maldives-5785067.jpg')}
            resizeMode="cover"
          />
          <View style={styles.btn_group}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('home');
              }}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="content-save-outline"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.desc}>
          <Text style={styles.title}>Anse Source d'Argent</Text>
          <View style={styles.desc_details}>
            <Text style={styles.text}>
              <MaterialCommunityIcons
                name="map-marker"
                size={17}
                color="blue"
              />
              Anse Source d'Argent
            </Text>
            <Text style={styles.text}>
              <MaterialCommunityIcons name="star" size={17} color="blue" />
              4.9 (16k reviews)
            </Text>
          </View>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.text}>
            Asynchronous functions are generally preferred over synchronous
            functions as they do not block the execution of the program whereas
            synchronous functions block the execution of the program until it
            has finished processing.
          </Text>
        </View>

        <ScrollView
          style={styles.more_image}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          <Image
            style={styles.image}
            source={require('./assests/pexels-red-zeppelin-7499348.jpg')}
            resizeMode="cover"
          />
          <Image
            style={styles.image}
            source={require('./assests/pexels-athena-1586793.jpg')}
            resizeMode="cover"
          />
          <Image
            style={styles.image}
            source={require('./assests/pexels-james-owen-4219366.jpg')}
            resizeMode="cover"
          />
          <Image
            style={styles.image}
            source={require('./assests/pexels-tom-fisk-3995803.jpg')}
            resizeMode="cover"
          />
        </ScrollView>
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
          <Text style={styles.btn_text}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  imageContainer: {width: '100%'},
  main_image: {width: '100%', height: 350, borderRadius: 15},
  btn_group: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 15,
  },
  title: {fontSize: 24, fontWeight: 'bold', color: '#222', marginVertical: 10},
  desc_details: {flexDirection: 'row'},
  text: {fontSize: 15, marginRight: 10},
  more_image: {marginVertical: 10, width: '100%', marginTop: 20},
  image: {width: 150, height: 120, borderRadius: 20, marginHorizontal: 10},
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '18%',
    marginVertical: 15,
    backgroundColor: '#0009ab',
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
  },
  btn_text: {fontSize: 21, color: '#fff', fontWeight: 'bold'},
});

export default Details;
