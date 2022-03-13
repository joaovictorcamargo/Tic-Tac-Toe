import { View, Image } from "react-native";
import React from "react";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { ReactElement } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { GradientBackground, Button } from "@components";
type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require("@assets/logo.png")} />
        <View style={styles.buttons}>
          <Button />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
