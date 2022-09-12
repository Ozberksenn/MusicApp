import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MusicCard.style";
const MusicCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.albumPhotoContainer}>
        <Image
          style={styles.albumPhoto}
          source={{
            uri: "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/da/46/db/da46dbff-71cb-e4b3-2b0b-8c8d4b51e16d/825646937097.jpg/1200x1200bf-60.jpg",
          }}
        />
      </View>
      <View style={styles.titleAndName}>
        <Text>MusicCard</Text>
        <Text>Name</Text>
      </View>
    </View>
  );
};

export default MusicCard;
