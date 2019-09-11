import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" score="1" imgSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Mountain" score="2" imgSource={require('../../assets/mountain.jpg')} />
            <ImageDetail title="Beach" score="3" imgSource={require('../../assets/beach.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
