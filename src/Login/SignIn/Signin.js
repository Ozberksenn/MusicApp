import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./Signin.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const navigation = useNavigation();
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
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button btnName="SIGN IN" />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={styles.forgotPassword}>Forgot Password ? </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
