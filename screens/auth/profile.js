import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

export default function profile({ navigation }) {
  async function press() {
    try {
      await firebase.auth().signOut();

      navigation.replace('SignupScreen');
      console.log('LoggedOut');
    } catch (error) {
      console.log(error);
    }
  }
  // const press = () => {
  //   // firebase.auth().signOut();
  //   navigation.navigate('SignupScreen');
  //   console.log('logout');
  // };

  return (
    <View>
      <View style={{ padding: 20, margin: 40 }}>
        <Text> welcome</Text>
      </View>
      <Text> {navigation.getParam('mail')} </Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <Button title={'log out'} onPress={press} />
      </View>
    </View>
  );
}
