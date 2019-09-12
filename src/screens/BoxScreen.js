import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> aaa </Text>
            <Text style={styles.textTwoStyle}> bbb </Text>
            <Text style={styles.textThreeStyle}> ccc </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        justifyContent: 'space-around'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;