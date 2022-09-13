import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Theme.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/themeSlice";
const Theme = () => {
  const { activeTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={[
        styles.themeContainer,
        { backgroundColor: activeTheme.backgroundColor },
      ]}
    >
      <TouchableOpacity
        onPress={() => dispatch(toggleTheme())}
        style={{ alignItems: "center" }}
      >
        <Icon
          name="theme-light-dark"
          style={[styles.icon, { color: activeTheme.iconColor }]}
        />
        <Text style={[styles.themeText, { color: activeTheme.iconColor }]}>
          Dark / Light
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Theme;
