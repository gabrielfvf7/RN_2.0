import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>Teste</Text>
    <Button 
      title="Go to components screen" 
      onPress={() => navigation.navigate('Components')}
    />
    <Button
      title="Go to list screen"
      onPress={() => navigation.navigate('List')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
