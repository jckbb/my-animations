import { Animated, Text, View } from "react-native";
import ShareButton from "../ShareButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface Props {
  scrollY: Animated.Value;
  topEdge: number;
}

interface DummyButtonProps {
  topEdge: number;
  scrollY: Animated.Value;
  label: string;
  styling?: any;
}

const DummyButton = ({
  topEdge,
  scrollY,
  label,
  styling,
}: DummyButtonProps) => (
  <Animated.View
    style={[
      {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: scrollY.interpolate({
          inputRange: [-1, 0, topEdge - 1, topEdge],
          outputRange: [0, 0, 0, 0.25],
          extrapolate: "clamp",
        }),
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
      },
      styling,
    ]}
  >
    <Text>{label}</Text>
  </Animated.View>
);

const Footer = ({ scrollY, topEdge }: Props) => {
  const inset = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        styles.footer,
        {
          bottom: inset.bottom,
          transform: [
            {
              // move interpolated position at topedge
              translateY: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 1, topEdge],
                outputRange: [0, 0, 0, -1],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.group}>
        <DummyButton
          styling={{ backgroundColor: "#7bed9f" }}
          label="+"
          topEdge={topEdge}
          scrollY={scrollY}
        />
        <ShareButton topEdge={topEdge} scrollY={scrollY} />
      </View>
      <DummyButton label="i" topEdge={topEdge} scrollY={scrollY} />
    </Animated.View>
  );
};

export default Footer;
