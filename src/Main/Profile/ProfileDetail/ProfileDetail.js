import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./ProfileDetail.style";
import Input from "../../../components/profileDetailInput/profileDetailInput";
import { useNavigation } from "@react-navigation/native";
const ProfileDetail = () => {
  const navigation = useNavigation();
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
      <Input onPress={() => navigation.navigate("Theme")} name="Theme" />
      <Input name="Edit Profile" />
      <Input name="Log Out" />
    </SafeAreaView>
  );
};

export default ProfileDetail;
