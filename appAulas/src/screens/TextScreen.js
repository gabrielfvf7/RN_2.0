import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style= {{marginLeft: 15, marginTop: 15}}>Enter name:</Text>
            <TextInput 
                autoCorrect = {false}
                autoCapitalize = "none"
                placeholder= "oi" 
                value = {name}
                onChangeText={(newValue) => setName(newValue)}
                style = {styles.input}
                autoFocus = {true}
            />
            <Text>My name is {name}</Text>
            {name.length < 5 ? <Text>Password needs have at least 5 chars</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        paddingLeft: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;