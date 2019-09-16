import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDfVwWEvSfLyXXkg3ZjS8DGiNI7dmctII0',
      authDomain: 'manager-92cca.firebaseapp.com',
      databaseURL: 'https://manager-92cca.firebaseio.com',
      projectId: 'manager-92cca',
      storageBucket: '',
      messagingSenderId: '903309232599',
      appId: '1:903309232599:web:2dce9fcd910d1508d2a392'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
