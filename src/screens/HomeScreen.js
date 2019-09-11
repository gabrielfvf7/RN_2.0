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
    <Button
      title="Go to image screen"
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title="Go to counter screen"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to color screen"
      onPress={() => navigation.navigate('Color')}
    />
     <Button
      title="Go to square screen"
      onPress={() => navigation.navigate('Square')}
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
