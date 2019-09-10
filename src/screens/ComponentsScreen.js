import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hello!</Text>;

    return( 
        <View>
            <Text style={styles.textStyle}>Tela</Text>   
            {greeting} 
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;
