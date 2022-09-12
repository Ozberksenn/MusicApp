import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "../Button/Button.style";
const Button = ({ btnName }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
