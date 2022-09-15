import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./Profile.style";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../config";
import { useSelector } from "react-redux";
import MusicCard from "../../components/MusicCard/MusicCard";
const Profile = () => {
  const navigation = useNavigation();
  const { likedSongs } = useSelector((state) => state.song);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profilImage}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
          }}
        />
        <Text style={styles.firstName}>First Name</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDetail")}>
          <AntDesign name="rightcircleo" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.line}></View>
        <Text style={styles.likedTitle}>Liked Songs</Text>
        <FlatList
          data={likedSongs}
          renderItem={({ item }) => (
            <MusicCard data={item.data} isAdded={true} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
