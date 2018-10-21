// import libraries for making a component
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// make a component
const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
})

// make a component available to other parts of the app
export { Header }
