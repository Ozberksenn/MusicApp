import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumPhoto: {
    width: 70,
    height: 70,
    resizeMode: "stretch",
    marginLeft: 10,
    borderRadius: 5,
  },
  titleAndName: {
    marginLeft: 10,
    marginVertical: 5,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
  },
  artistName: {
    color: "gray",
  },
});
