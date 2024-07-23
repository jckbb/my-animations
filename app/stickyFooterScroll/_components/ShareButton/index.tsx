import { SendIcon } from "@/assets/icons";
import React from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  View,
} from "react-native";

interface Props {
  scrollY: Animated.Value;
  topEdge: number;
}

const styles = StyleSheet.create({
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    backgroundColor: "white",
    shadowRadius: 3.84,
    elevation: 5,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

const ShareButton = ({ scrollY, topEdge }: Props) => {
  return (
    <Animated.View
      style={[
        styles.button,
        {
          shadowOpacity: scrollY.interpolate({
            inputRange: [-1, 0, topEdge - 1, topEdge],
            outputRange: [0, 0, 0, 0.25],
            extrapolate: "clamp",
          }),
          opacity: scrollY.interpolate({
            inputRange: [-1, 0, topEdge - 1, topEdge],
            outputRange: [0, 0, 1, 1],
          }),
          transform: [
            {
              translateX: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 1, topEdge],
                outputRange: [0, 0, 16, 16],
                extrapolate: "clamp",
              }),
            },
          ],
        },
      ]}
    >
      <TouchableWithoutFeedback>
        <View>
          <SendIcon height={16} width={16} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default ShareButton;
