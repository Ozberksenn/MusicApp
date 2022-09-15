import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./ProfileDetail.style";
import Input from "../../../components/profileDetailInput/profileDetailInput";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logOut } from "../../../redux/userSlice";
import { firebase } from "../../../../config";

const ProfileDetail = () => {
  const { activeTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogOut = () => {
    dispatch(logOut({}));
  };

  return (
    <SafeAreaView
      style={[
        styles.ProfileDetailContainer,
        { backgroundColor: activeTheme.backgroundColor },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.profilDetailPhoto}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
          }}
        />
      </View>
      <View>
        <Text style={[styles.profilName, { color: activeTheme.fontColor }]}>
          Profil Name
        </Text>
      </View>
      <Input onPress={() => navigation.navigate("Theme")} name="Theme" />
      <Input
        onPress={() => navigation.navigate("EditProfile")}
        name="Edit Profile"
      />
      <Input onPress={handleLogOut} name="Log Out" />
    </SafeAreaView>
  );
};

export default ProfileDetail;
