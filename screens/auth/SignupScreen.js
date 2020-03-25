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
import { NavigationAction } from 'react-navigation';

export default function SignupScreen({ navigation }) {
  const pres = () => {
    navigation.replace('LoginScreen');
  };
  const press = () => {
    navigation.replace('ForgetPasswordScreen');
  };
  //----------------------------------------------------------------
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [conpass, setconpass] = useState('');

  const changeEmail = val => {
    setmail(val);
  };
  const changePassword = val => {
    setpass(val);
  };

  const changeConPassword = val => {
    setconpass(val);
  };

  const submit = () => {
    if (mail != '' && pass != '' && conpass != '') {
      if (conpass == pass) {
        signup(mail, pass);
      } else {
        Alert.alert('Error', ' password and confirm password arenot correct');
      }
    } else {
      Alert.alert('Error', 'enter email , password , confirmpassword');
    }
  };

  async function signup() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(mail, pass);

      //   navigation.navigate('todo', { mail: mail });
      setmail('');
      setpass('');
      setconpass('');
      console.log('Account created');
    } catch (error) {
      Alert.alert('error');
    }
  }

  //----------------------------------------------------------------
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View style={{ flex: 1, marginTop: 40 }}>
        <TextInput
          style={styles.input}
          placeholder=' email@gmail.com'
          onChangeText={changeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder=' enter  password'
          onChangeText={changePassword}
          secureTextEntry={true}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder=' confirm password'
          onChangeText={changeConPassword}
        />

        <View style={{ padding: 20, marginTop: 20 }}>
          <Button onPress={submit} title='SIGNUP' />
        </View>
        <View style={{ padding: 20, marginTop: 300 }}>
          <Button onPress={pres} title='LOGIN' />
        </View>
        <View style={{ padding: 20, marginTop: 90 }}>
          <Button onPress={press} title='Forget Password' color='red' />
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <View>
    //   <Button title='go to login' onPress={pres} />
    // </View>
  );
}
const styles = StyleSheet.create({
  input: {
    // flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue'
  }
});
