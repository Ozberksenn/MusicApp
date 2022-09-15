import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SearchDetail.style";
import axios from "axios";
import MusicCard from "../../../components/MusicCard/MusicCard";
const SearchDetail = ({ route }) => {
  const { id, name } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    songsData();
  }, []);

  const songsData = async () => {
    const response = await axios.get(
      `http://api.napster.com/v2.2/genres/${id}/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`
    );
    setData(response.data.tracks);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <MusicCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default SearchDetail;
