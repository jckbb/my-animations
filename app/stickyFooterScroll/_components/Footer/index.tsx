import { Animated, Text, View } from "react-native";
import { InfoIcon, SendIcon } from "@/assets/icons";
import ShareButton from "../ShareButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  scrollY: Animated.Value;
  topEdge: number;
}

const Footer = ({ scrollY, topEdge }: Props) => {
  const inset = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        position: "absolute",
        paddingHorizontal: 16,
        bottom: inset.bottom,
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
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [-1, 0, topEdge - 1, topEdge],
              outputRange: [0, 0, 0, -1],
            }),
          },
        ],
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#7bed9f",
            borderRadius: 20,
          }}
        >
          <Text>{"+"}</Text>
        </View>
        <ShareButton topEdge={topEdge} scrollY={scrollY} />
      </View>
      <View
        style={{
          height: 40,
          minWidth: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <InfoIcon height={30} width={30} />
      </View>
    </Animated.View>
  );
};

export default Footer;
