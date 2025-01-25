import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DescriptionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default DescriptionText

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "black"
  }
})