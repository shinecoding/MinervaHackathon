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
        color: "black",
        marginBottom: 4,
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        // letterSpacing: 1.5,
        // fontFamily: 'logo-font',
    },
})