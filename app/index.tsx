import { Link } from "expo-router";
import React from "react";
import { Text, FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ flex: 1 }}
        data={[{ label: "FadeAwayScroll", routePath: "/fadeAwayScroll" }]}
        renderItem={({ item }) => (
          <Link href={item.routePath} asChild>
            <Pressable
              style={{
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
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  letterSpacing: 1,
                  fontWeight: "700",
                  opacity: 0.8,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
