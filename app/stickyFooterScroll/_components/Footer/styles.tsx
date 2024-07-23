import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footer: {
    position: "absolute",
    paddingHorizontal: 16,
    left: 0,
    right: 0,
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
  },
  group: { flexDirection: "row" },
});
