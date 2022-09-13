import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";
import axios from "axios";
import MusicCard from "../../components/MusicCard/MusicCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
const Home = () => {
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const response = await axios.get(
      "https://api.napster.com/v2.2/playlists/featured?limit=4&offset=5&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    setPlaylist(response.data.playlists);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>HOME</Text>
      </View>
      <Text style={styles.viewAll}>View All</Text>
      <FlatList
        numColumns={2}
        data={playlist}
        renderItem={({ item }) => <PlaylistCard data={item} />}
      />
      <PlaylistCard />
    </SafeAreaView>
  );
};

export default Home;
