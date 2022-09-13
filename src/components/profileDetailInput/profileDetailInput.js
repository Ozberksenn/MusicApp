import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";

const profileDetailInput = ({ onPress, name }) => {
  const { activeTheme } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text, { color: activeTheme.fontColor }]}>
        {name}
      </Text>
      <AntDesign style={styles.icon} name="rightcircleo" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginRight: 50,
    borderBottomWidth: 1,
    borderColor: "#81b71a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    padding: 20,
    fontSize: 26,
    color: "#fff",
  },
  icon: {
    fontSize: 28,
    color: "#81b71a",
    marginRight: 15,
  },
});

export default profileDetailInput;
