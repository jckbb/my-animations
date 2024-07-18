import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

// Want to show some of the other cards off screen
export const ITEM_SIZE = screenWidth * 0.75;
// Need something to fill the beginning and end of list
export const SPACER = (screenWidth - ITEM_SIZE) / 2;
const CARD_HEIGHT = screenHeight * 0.7;

export default StyleSheet.create({
  item: {
    height: CARD_HEIGHT,
    width: ITEM_SIZE,
  },
  card: {
    flex: 1,
    backgroundColor: "#33333366",
    borderRadius: 24,
    marginHorizontal: 10,
  },
  cardLabel: {
    textAlign: "center",
  },
});
