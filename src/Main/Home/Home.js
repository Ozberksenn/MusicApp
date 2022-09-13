import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";
import axios from "axios";
import MusicCard from "../../components/MusicCard/MusicCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
const Home = () => {
  const [playlist, setPlaylist] = useState();
  const [track, setTrack] = useState();

  useEffect(() => {
    data();
    dataTracks();
  }, []);

  const data = async () => {
    const response = await axios.get(
      "https://api.napster.com/v2.2/playlists/featured?limit=6&offset=5&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    setPlaylist(response.data.playlists);
  };
  const dataTracks = async () => {
    const response = await axios.get(
      "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    setTrack(response.data.tracks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>HOME</Text>
        </View>
        <Text style={styles.viewAll}>View All</Text>
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={playlist}
          renderItem={({ item }) => <PlaylistCard data={item} />}
        />
      </View>
      <View>
        <Text style={styles.topTracks}>Top Tracks</Text>
        <FlatList
          data={track}
          renderItem={({ item }) => <MusicCard data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
