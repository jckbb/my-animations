import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";
import styles, { ITEM_SIZE, SPACER } from "./_styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "./_utils";

const ArcCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    // check id for start and end
    if (item.id === "start" || item.id === "end") {
      return <View style={{ width: SPACER }} />;
    }
    // [prev, curr, next]
    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];
    // move curr on y axis
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -50, 0],
    });

    return (
      <Animated.View style={[styles.item, { transform: [{ translateY }] }]}>
        <View style={[styles.card, { backgroundColor: `${item.color}B3` }]} />
        <Text style={styles.cardLabel}>{item.name}</Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={false}
        contentContainerStyle={{ alignItems: "center" }}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ArcCarousel;
