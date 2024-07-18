import { StyleSheet, Image, Text, View, Animated } from "react-native";
import BGIMAGE from "../../assets/bg_img.png";
import { useRef } from "react";
import styles, { ITEM_SIZE } from "./_styles";
import { dummyData } from "./_utils";

const FadeAwayScroll = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderLogItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5),
    ];
    const scale = scrollY.interpolate({
      inputRange: inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={[
          styles.item,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Text>{item.name}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.parent}>
      <Image
        style={[
          StyleSheet.absoluteFillObject,
          { height: "100%", width: "100%" },
        ]}
        source={BGIMAGE}
        blurRadius={50}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        style={{ paddingTop: 65 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={dummyData}
        renderItem={renderLogItem}
        keyExtractor={(item, _) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default FadeAwayScroll;
