import { View, Text, SafeAreaView, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Search.style";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import GenresCard from "../../components/GenresCard/GenresCard";
const Search = () => {
  const [genres, setGenres] = useState();

  useEffect(() => {
    genresData();
  }, []);

  const genresData = async () => {
    const response = await axios.get(
      "https://api.napster.com/v2.2/genres?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    setGenres(response.data.genres);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>SEARCH</Text>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign style={{ left: 5 }} name="search1" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#000"
          placeholder="What do you want to listen ? "
        />
      </View>
      <FlatList
        numColumns={2}
        data={genres}
        renderItem={({ item }) => <GenresCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Search;
