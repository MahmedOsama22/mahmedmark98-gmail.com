import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './components/ApiKeys';
import * as firebase from 'firebase';
import Navigator from './routes/homeStack';

export default /*function*/ class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.firebaseConfig);
    }
    // firebase.analytics()
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <Navigator />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
