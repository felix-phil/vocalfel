import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { Appbar } from "react-native-paper";
import { useAppTheme } from "../../hooks";

interface IProps {
  title?: string;
  backAction?: () => void;
  right?: ReactNode;
  children?: ReactNode
}
const AppHeader: FC<IProps> = ({ title, right, backAction, children }: IProps) => {
  const theme = useAppTheme();
  return (
    <Appbar.Header
      style={{ backgroundColor: "transparent", paddingRight: "3%" }}
    >
      <Appbar.BackAction onPress={backAction} color={theme.colors.secondary} />
      <Appbar.Content
        style={{ backgroundColor: "transparent" }}
        role="contentinfo"
        titleStyle={styles.title}
        title={title || ""}
      />
      {right}
      {children}
    </Appbar.Header>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Secondary-700",
    fontSize: 25,
    alignSelf: "flex-start",
  },
});
