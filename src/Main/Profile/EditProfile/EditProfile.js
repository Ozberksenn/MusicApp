import { View, SafeAreaView, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styles from "./EditProfile.style";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../redux/userSlice";
const EditProfile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);
  const handleSaveButton = () => {
    if (mail && password && passwordAgain) {
      dispatch(
        updateUser({
          mail: mail,
          password: password,
          passwordAgain: passwordAgain,
        })
      );
    } else {
      Alert.alert(
        "Wrong",
        "mail and password information cannot be left blank."
      );
    }
  };
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
      <Input
        defaultValue={userInfo?.mail}
        onChangeText={(value) => setMail(value)}
        placeholder="Mail"
      />
      <Input
        defaultValue={userInfo?.password}
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
      />
      <Input
        defaultValue={userInfo?.password}
        onChangeText={(value) => setPasswordAgain(value)}
        placeholder="Password Again"
      />
      <Button onPress={handleSaveButton} btnName="Save" />
    </SafeAreaView>
  );
};
export default EditProfile;
