import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Home.style";
import axios from "axios";
import MusicCard from "../../components/MusicCard/MusicCard";
import { useState } from "react";
const Home = () => {
  const [playlist, setPlaylist] = useState();

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>HOME</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
