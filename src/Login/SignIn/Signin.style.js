import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#2e3034",
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
  signInText: {
    alignItems: "center",
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    color: "#7f8184",
    fontSize: 14,
  },
});
