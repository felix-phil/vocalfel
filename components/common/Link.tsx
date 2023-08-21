import { Linking, StyleSheet, TextProps } from "react-native";
import React, { FC, ReactNode } from "react";
import { Text } from "react-native-paper";

interface IProp extends TextProps {
  children: ReactNode | ReactNode[];
  href: string;
}
const Link: FC<IProp> = ({ href, children, ...props }) => {
  const handleLinkPress = async () => {
    try {
      await Linking.openURL(href);
    } catch (error) {}
  };
  return (
    <Text onPress={handleLinkPress} {...props}>
      {children}
    </Text>
  );
};

export default Link;

const styles = StyleSheet.create({});
