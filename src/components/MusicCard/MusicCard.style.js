import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  playButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  titleAndName: {
    marginLeft: 10,
    marginVertical: 5,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 2,
  },
  artistName: {
    color: "gray",
  },
});
