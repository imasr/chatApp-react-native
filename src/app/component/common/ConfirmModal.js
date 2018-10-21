import React from 'react'
import { StyleSheet, Modal, View, Text } from 'react-native'
import { CardSection } from './CardSection' // these are exported individually
import { Button } from './Button'           // to avoid circular reference from index

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, containerStyle, textStyle } = styles

    return (
        <Modal
            transparent
            animationType="slide"
            onRequestClose={() => null}
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        justifyContent: 'center'
    },
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 13
    }
})

export { ConfirmModal }
