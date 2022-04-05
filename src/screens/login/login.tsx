import { ScrollView, TextInput } from "react-native";
import React, { ReactElement } from "react";
import { GradientBackground } from "@components";
import styles from "./login.styles";
import { colors } from "@utils";

export default function Login(): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={{
            height: 50,
            width: "100%",
            borderBottomWidth: 1,
            borderColor: colors.lightGreen,
            backgroundColor: colors.purple,
          }}
        />
      </ScrollView>
    </GradientBackground>
  );
}
