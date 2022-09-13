import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./GenresCard.style";
const GenresCard = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default GenresCard;
