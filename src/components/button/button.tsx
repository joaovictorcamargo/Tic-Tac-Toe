import { View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./button.styles";
import { ReactElement } from "react";
import { Text } from "@components";
export default function Button(): ReactElement {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Single Player</Text>
    </TouchableOpacity>
  );
}
