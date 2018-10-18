import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

// Boolean component props with true can omit the ={true} part
// ie: secureTextEntry
const Input = ({ label, placeholder, onChangeText, value, autoCorrect, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle } = styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
})

export { Input }
