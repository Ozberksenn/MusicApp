import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./Profile.style";

const Profile = () => {
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
        <TouchableOpacity>
          <AntDesign name="rightcircleo" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.likedTitle}>Liked Songs</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
