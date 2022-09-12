import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "../Button/Button.style";
const Button = ({ onPress, btnName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
