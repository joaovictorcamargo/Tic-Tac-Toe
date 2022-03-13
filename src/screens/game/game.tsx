import { View, Text } from "react-native";
import React from "react";
import styles from "./game.styles";
import { GradientBackground } from "@components";

export default function Game() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text>Game</Text>
      </View>
    </GradientBackground>
  );
}
