import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FeaturedDetail.style";
import MusicCard from "../../../components/MusicCard/MusicCard";
const FeaturedDetail = ({ route }) => {
  const { id, name } = route.params;
  const [data, setData] = useState(null);

  const deaturedDetailData = async () => {
    const response = await axios.get(
      `https://api.napster.com/v2.2/playlists/${id}/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=25`
    );
    setData(response.data.tracks);
  };

  useEffect(() => {
    deaturedDetailData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <MusicCard data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default FeaturedDetail;
