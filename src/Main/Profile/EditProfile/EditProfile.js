import { View, SafeAreaView, Text, ScrollView } from "react-native";
import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styles from "./EditProfile.style";
const EditProfile = () => {
  return (
    <SafeAreaView style={styles.editProfileContainer}>
      <View>
        <Text style={styles.title}>Edit Profile : </Text>
      </View>
      <View style={{ marginLeft: 40, marginVertical: 15 }}>
        <Text style={{ fontSize: 18, color: "gray" }}>
          Do you want to update your profile information?
        </Text>
      </View>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Input placeholder="Password Again" />
      <Button btnName="Save" />
    </SafeAreaView>
  );
};

export default EditProfile;
