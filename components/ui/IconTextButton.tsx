import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Colors } from '@/constants/styles';

function IconTextButton({ icon, size, text, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default IconTextButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 10,
    margin: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: "purple",
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.5,
  }
});
