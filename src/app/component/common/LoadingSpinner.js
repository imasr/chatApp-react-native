import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const LoadingSpinner = ({ size }) => {
    const { spinnerStyle } = styles
    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { LoadingSpinner }
