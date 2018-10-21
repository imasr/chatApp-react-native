import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,ImageBackground
} from 'react-native';

// could destructure props for children
const BackgroundImage = ({ children }) => {
    return (
      <ImageBackground source={require('../../assets/images/back.png')}
            style={styles.backgroundImage}>
                {children}
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        padding:10,
        paddingTop:35
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

export {BackgroundImage}
