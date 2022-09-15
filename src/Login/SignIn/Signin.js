import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Signin.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { setUser } from "../../redux/userSlice";

const Signin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignInButton = async () => {
    if (mail && password) {
      dispatch(
        setUser({
          mail: mail,
          password: password,
          passwordAgain: password,
        })
      );
      firebase
        .auth()
        .signInWithEmailAndPassword(mail, password)
        .then(() =>
          AsyncStorage.setItem(
            "userKey",
            JSON.stringify({
              mail: mail,
              password: password,
              passwordAgain: password,
            })
          )
        )
        .catch((error) => console.log(error));
    } else {
      Alert.alert(
        "Wrong",
        "mail and password information cannot be left blank."
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/spotify_logo.png")}
        />
      </View>
      <View style={styles.transition}>
        {/* signIn ve SıgnUp sayfası geçişleri için. */}
        <TouchableOpacity>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signInText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Input onChangeText={(value) => setMail(value)} placeholder="Mail" />
      <Input
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
      />
      <Button onPress={handleSignInButton} btnName="SIGN IN" />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={styles.forgotPassword}>Forgot Password ? </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
