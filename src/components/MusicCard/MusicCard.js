import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MusicCard.style";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const MusicCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.playButtonContainer}>
          <Ionicons
            style={{ marginLeft: 5 }}
            name="md-play"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.titleAndName}>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.artistName}>{data?.artistName}</Text>
        </View>
      </View>
      <View>
        <Entypo
          style={{ right: 15 }}
          name="heart-outlined"
          size={24}
          color="white"
        />
      </View>
    </View>
  );
};

export default MusicCard;
