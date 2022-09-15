import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./MusicCard.style";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../../redux/songsSlice";

const MusicCard = ({ data, isAdded }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(isAdded ? true : false);

  const hadnleClick = () => {
    if (!like) {
      dispatch(addSong({ data }));
      setLike(!like);
    } else {
      dispatch(removeSong({ data }));
      setLike(!like);
    }
  };

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
      <TouchableOpacity onPress={hadnleClick}>
        {like ? (
          <Entypo style={{ right: 15 }} name="heart" size={24} color="green" />
        ) : (
          <Entypo
            style={{ right: 15 }}
            name="heart-outlined"
            size={24}
            color="green"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MusicCard;
