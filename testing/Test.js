import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
const Test = () => {
  return (
    <SafeAreaView>
      <Text>Hello Man</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {fontSize: 21, fontWeight: '500'},
});
export default Test;
