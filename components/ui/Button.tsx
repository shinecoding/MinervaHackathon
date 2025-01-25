import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// import { Colors } from '@/constants/styles';

function Button({ children, onPress, disabled, display }) {
  return (
    <>
    {display ? (
    <Pressable
      style={({ pressed }) => [
        styles.button, 
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={!disabled ? onPress : null}
    >
      <View>
        <Text style={styles.buttonText} disabled={disabled}>{children}</Text>
      </View>
    </Pressable>
  ) : null}
  </>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width:'100%',
    borderRadius: 4,
    paddingVertical: 8,
    // paddingHorizontal: 16,
    backgroundColor: "purple",
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    backgroundColor: "gray"
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
