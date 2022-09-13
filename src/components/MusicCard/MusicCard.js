import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MusicCard.style";
import { Entypo } from "@expo/vector-icons";
const MusicCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndName}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.artistName}>{data?.artistName}</Text>
      </View>
      <View>
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>
    </View>
  );
};

export default MusicCard;
