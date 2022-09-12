import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./Signup.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
const Signup = () => {
  const navigation = useNavigation();
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
        <Input placeholder="Mail" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Input placeholder="Password Again" />
      </View>
      <Button btnName="SIGN UP" />
    </SafeAreaView>
  );
};

export default Signup;
