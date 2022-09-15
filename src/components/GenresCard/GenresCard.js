import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./GenresCard.style";
import { useNavigation } from "@react-navigation/native";
const GenresCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SearchDetail", {
          id: data.id,
          name: data.name,
        })
      }
      style={styles.container}
    >
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default GenresCard;
