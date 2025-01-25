import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Colors } from '@/constants/styles'

const Label = ({ children }) => {
    return (
        <View>
            <Text style={styles.label}>{children}</Text>
        </View>
    )
}

export default Label

const styles = StyleSheet.create({
    label: {
        color: "red",
        marginBottom: 4,
        marginTop: 8,
        // letterSpacing: 1.5,
        // fontFamily: 'logo-font',
    },
})