import React from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  View,
  StyleSheet,
} from "react-native";

interface Props {
  children: JSX.Element;
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

const AnimatedCircleButton = ({ children, scrollY, topEdge }: Props) => {
  return (
    <Animated.View
      style={[
        styles.button,
        {
          shadowOpacity: scrollY.interpolate({
            inputRange: [-1, 0, topEdge - 1, topEdge],
            outputRange: [0, 0, 0.25, 0],
          }),
          opacity: scrollY.interpolate({
            inputRange: [-1, 0, topEdge - 1, topEdge],
            outputRange: [0, 0, 1, 1],
          }),
          transform: [
            {
              translateX: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 10, topEdge],
                outputRange: [0, 0, 16, 16],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableWithoutFeedback>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default AnimatedCircleButton;
