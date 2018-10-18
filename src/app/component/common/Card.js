import React from 'react'
import { StyleSheet, View } from 'react-native'

// could destructure props for children
const Card = ({ children, style }) => {
    const { containerStyle } = styles
    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        elevation: 1,
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
})

export { Card }
