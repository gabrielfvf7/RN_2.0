import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return {...state, value: state.value + action.change_counter};
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const { value } = state;

    return (
        <View>
            <Button 
                title='Increase'
                onPress={() => dispatch({ change_counter: 1})}
            />
            <Button 
                title='Decrease'
                onPress={() => dispatch({ change_counter: -1})}             
            />
                <Text>Current Count: {value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;