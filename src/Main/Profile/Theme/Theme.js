import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Theme.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const Theme = () => {
  return (
    <SafeAreaView style={styles.themeContainer}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon name="theme-light-dark" color="#fff" size={100} />
        <Text style={styles.themeText}>Dark / Light</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Theme;
