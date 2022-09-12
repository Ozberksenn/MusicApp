import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./TabBar.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const TabBar = () => {
  const navigation = useNavigation();
  const [focused, setFocused] = useState(1);
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home") & setFocused(1)}
      >
        <View style={styles.iconView}>
          <Ionicons style={styles.icon} name="home" />
          <Text style={styles.homeIconText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search") & setFocused(2)}
      >
        <View style={styles.iconView}>
          <Ionicons style={styles.icon} name="search" />
          <Text style={styles.homeIconText}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile") & setFocused(3)}
      >
        <View style={styles.iconView}>
          <AntDesign style={styles.icon} name="profile" />
          {/* AntDesign package using. */}
          <Text style={styles.homeIconText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
