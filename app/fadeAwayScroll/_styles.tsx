import { Platform, StyleSheet } from "react-native";

export const ITEM_SIZE = 90 + 16; // item height + item separator height

const isWeb = Platform.OS === "web";

export default StyleSheet.create({
  parent: { flex: 1 },
  item: {
    height: 90,
    borderRadius: 16,
    backgroundColor: "#ffffffB3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    alignSelf: isWeb ? "center" : "auto",
    width: isWeb ? 400 : "auto",
    shadowOpacity: 0.2,
    shadowRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
