import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./PlaylistCard.style";
import { useNavigation } from "@react-navigation/native";
const PlaylistCard = ({ data }) => {
  const navigation = useNavigation();
  if (!data?.name) return false;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("FeaturedDetail", {
          id: data.id,
          name: data.name,
        })
      }
    >
      <ImageBackground
        source={{ uri: data?.images[0].url }}
        style={styles.container}
      >
        <Text style={styles.name}>{data?.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlaylistCard;
