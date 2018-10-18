import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const Label = ({ children }) => {
    const { labelStyle, textStyle } = styles

    return (
        <TouchableOpacity style={labelStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    labelStyle: {
        flex: 1,
        color: '#fff',
        padding: 18
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 10,
        fontWeight: '600',
        paddingTop: 1,
        paddingBottom: 1
    }
})

export {Label};
