import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Signup.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [mail, setMail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();
  const navigation = useNavigation();

  const handleSignUp = () => {
    //redux statemize input bilgilerini yazdırıyoruz.
    dispatch(
      addUser({
        mail: mail,
        userName: userName,
        password: password,
        passwordAgain: passwordAgain,
      })
    );
  };
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/spotify_logo.png")}
        />
      </View>
      <View style={styles.transition}>
        {/* signIn ve SıgnUp sayfası geçişleri için. */}
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signInText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Input onChangeText={(value) => setMail(value)} placeholder="Mail" />
        <Input
          onChangeText={(value) => setUserName(value)}
          placeholder="Username"
        />
        <Input
          onChangeText={(value) => setPassword(value)}
          placeholder="Password"
        />
        <Input
          onChangeText={(value) => setPasswordAgain(value)}
          placeholder="Password Again"
        />
      </View>
      <Button onPress={handleSignUp} btnName="SIGN UP" />
    </SafeAreaView>
  );
};

export default Signup;
