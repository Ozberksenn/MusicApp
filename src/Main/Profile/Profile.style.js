import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2e3034" },
  header: {
    marginTop: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  profilImage: { width: 50, height: 50, borderRadius: 50, marginLeft: 10 },
  icon: { fontSize: 25, color: "#fff", marginRight: 10 },
  firstName: {
    color: "#fff",
    fontSize: 18,
  },
  likedTitle: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
    marginLeft: 10,
    color: "#fff",
  },
  line: {
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 15,
  },
});
