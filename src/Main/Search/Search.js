import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import styles from "./Search.style";
import { AntDesign } from "@expo/vector-icons";
const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>SEARCH</Text>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#000"
          placeholder="What do you want to listen ? "
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
