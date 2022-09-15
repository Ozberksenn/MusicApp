import { View, Text, SafeAreaView, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Search.style";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import GenresCard from "../../components/GenresCard/GenresCard";
import MusicCard from "../../components/MusicCard/MusicCard";
const Search = () => {
  const [genres, setGenres] = useState();
  const [focused, setFocused] = useState();
  const [trackData, setTrackData] = useState();
  const [text, setText] = useState(0);
  useEffect(() => {
    genresData();
  }, []);

  useEffect(() => {
    tracks();
  }, [text]);

  const genresData = async () => {
    const response = await axios.get(
      "https://api.napster.com/v2.2/genres?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    setGenres(response.data.genres);
  };

  const tracks = async () => {
    const response = await axios.get(
      `https://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&per_type_limit=3&query=${text}&type=track`
    );
    setTrackData(response.data.search.data.tracks);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>SEARCH</Text>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign style={{ left: 5 }} name="search1" size={24} color="black" />
        <TextInput
          onFocus={(value) => setFocused(value)}
          onChangeText={(value) => setText(value)}
          style={styles.searchInput}
          placeholderTextColor="#000"
          placeholder="What do you want to listen ? "
        />
      </View>
      {text.length > 0 ? (
        <FlatList
          data={trackData}
          renderItem={({ item }) => <MusicCard data={item} />}
        />
      ) : (
        <FlatList
          data={genres}
          renderItem={({ item }) => <GenresCard data={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
