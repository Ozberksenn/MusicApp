import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "../Input/Input.style";
const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholderTextColor="#c5c4c9"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
