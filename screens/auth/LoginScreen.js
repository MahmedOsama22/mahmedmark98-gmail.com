import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import * as firebase from 'firebase';

export default function LoginScreen({ navigation }) {
  const pres = () => {
    navigation.replace('SignupScreen');
  };
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');

  const changeEmail = val => {
    setmail(val);
  };
  const changePassword = val => {
    setpass(val);
  };
  const submit = () => {
    if (mail == '' && pass == '') {
      Alert.alert('Error', 'enter your email and password');
    } else {
      login(mail, pass);
    }
  };

  async function login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(mail, pass);
      navigation.navigate('profile', { mail: mail });
      setmail('');
      setpass('');
      console.log('LoggedIn!');
    } catch (error) {
      Alert.alert('error');
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View>
        <TextInput
          style={styles.input}
          placeholder=' email@gmail.com'
          onChangeText={changeEmail}
          value={mail}
        />
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          placeholder=' enter  password'
          secureTextEntry={true}
          onChangeText={changePassword}
          value={pass}
        />

        <View style={{ padding: 30, marginTop: 30 }}>
          <Button title='LOGIN' onPress={submit} />
        </View>
        <View style={{ padding: 20, marginTop: 80 }}>
          <Button title='signup Screen' onPress={pres} />
        </View>
        {/* <View style={styles.nav}>
        <Button color='red' onPress={pres} title='FORGET PASSWORD' />
      </View> */}
      </View>
    </TouchableWithoutFeedback>
    // <View>
    //   <Text>Login Screen</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  //     container: {
  //         flex: 1,
  //         backgroundColor: "#fff",
  //         padding: 40,
  //   },

  input: {
    // flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue'
  }
});
