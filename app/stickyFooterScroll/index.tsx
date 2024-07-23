import { useRef, useState } from "react";
import {
  Dimensions,
  Animated,
  Text,
  View,
  LayoutChangeEvent,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { paragraphs } from "./_utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DummyBar from "./_components/DummyBar";
import Footer from "./_components/Footer";

const { height: screenHeight } = Dimensions.get("screen");

export const GUIDE_HEIGHT = 50;

const styles = StyleSheet.create({
  dummyBlock: {
    width: "100%",
    height: 500,
    backgroundColor: "#70a1ff",
    borderRadius: 24,
  },
  parent: { backgroundColor: "white" },
});

const StickyFooterScroll = () => {
  const inset = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [bottomActions, setBottomActions] = useState<
    LayoutChangeEvent["nativeEvent"]["layout"] | null
  >(null);
  // y position of dummy bar within scrollview
  const topEdge =
    bottomActions &&
    bottomActions?.y -
      screenHeight +
      bottomActions?.height +
      inset?.bottom +
      inset?.top;

  return (
    <SafeAreaView style={styles.parent}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        // track scrolling
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {paragraphs.map((item, index) => (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        ))}
        {paragraphs.map((item, index) => (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        ))}
        <DummyBar
          onLayout={(e) => {
            setBottomActions(e.nativeEvent.layout);
          }}
        />
        <View style={styles.dummyBlock} />
        {paragraphs.map((item, index) => (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      {bottomActions && <Footer topEdge={topEdge} scrollY={scrollY} />}
    </SafeAreaView>
  );
};

export default StickyFooterScroll;
