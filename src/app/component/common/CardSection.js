import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = ({ children, style }) => {
    const { containerStyle } = styles
    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})

export { CardSection }
