import { Link, useRootNavigationState } from "expo-router";
import React from "react";
import { StyleSheet, Text, FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  pressableItem: {
    borderRadius: 16,
    height: 90,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  itemLabel: {
    color: "black",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    opacity: 0.8,
  },
  parent: { flex: 1 },
  mainListContainer: { paddingHorizontal: 24 },
});

const routes = [
  { label: "FadeAwayScroll", routePath: "/fadeAwayScroll" },
  { label: "Arc Carousel", routePath: "/arcCarousel" },
];

const Home = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return (
    <SafeAreaView style={styles.parent}>
      <FlatList
        contentContainerStyle={styles.mainListContainer}
        style={{ flex: 1 }}
        data={routes}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <Link href={item.routePath} asChild>
            <Pressable style={styles.pressableItem}>
              <Text style={styles.itemLabel}>{item.label}</Text>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
