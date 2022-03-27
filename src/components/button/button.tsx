import { View, TouchableOpacityProps, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./button.styles";
import { ReactElement } from "react";
import { Text } from "@components";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({
  title,
  style,
  ...props
}: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
