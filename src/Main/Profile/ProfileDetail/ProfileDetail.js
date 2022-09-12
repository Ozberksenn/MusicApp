import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./ProfileDetail.style";
import Input from "../../../components/profileDetailInput/profileDetailInput";
const ProfileDetail = () => {
  return (
    <SafeAreaView style={styles.ProfileDetailContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profilDetailPhoto}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
          }}
        />
      </View>
      <View>
        <Text style={styles.profilName}>Profil Name</Text>
      </View>
      <Input name="Theme" />
      <Input name="Edit Profile" />
      <Input name="Log Out" />
    </SafeAreaView>
  );
};

export default ProfileDetail;
