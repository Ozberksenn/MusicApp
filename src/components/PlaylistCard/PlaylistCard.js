import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./PlaylistCard.style";
const PlaylistCard = ({ data }) => {
  if (!data?.name) return false;
  return (
    <TouchableOpacity>
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
