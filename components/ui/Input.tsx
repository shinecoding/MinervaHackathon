import { View, Text, TextInput, StyleSheet } from 'react-native';

// import { Colors } from '@/constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
  multiline,
  numberOflines
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid, !isInvalid && styles.inputValid]}
        // autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOflines}
        textAlignVertical='top'
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    width: '100%'
  },
  label: {
    color: "black",
    marginBottom: 4,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: "red",
  },
  inputValid: {
    backgroundColor: 'white',
  },
  multiline: {
    lineHeight: 23
  }
});
