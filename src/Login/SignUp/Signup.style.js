import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: "#2e3034",
    justifyContent: "center",
  },
  logo: {
    width: Dimensions.get("screen").width / 1.8,
    height: 100,
    resizeMode: "contain",
    marginRight: 5,
  },
  logoContainer: {
    alignItems: "center",
  },
  transition: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-evenly",
  },
  signInText: {
    alignItems: "center",
    color: "#fff",
    fontSize: 16,
  },
});
