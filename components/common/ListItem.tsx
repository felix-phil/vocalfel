import { FC } from "react";
import { useAppTheme } from "../../hooks";
import Animated, {
  Easing,
  FadeInDown,
  runOnJS,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IconButton, List } from "react-native-paper";
import { StyleSheet } from "react-native";
import { hexToRGB } from "../../helpers";

interface ListItemPRops {
  title?: string;
  index: number;
  onRemovePress: () => void;
  onPress: () => void;
}
const ListItem: FC<ListItemPRops> = ({
  title,
  index,
  onRemovePress,
  onPress,
}) => {
  const theme = useAppTheme();
  const positionX = useSharedValue(0);

  const handleRemove = () => {
    positionX.value = withTiming(
      500,
      {
        duration: 300,
        easing: Easing.linear,
      },
      () => runOnJS(onRemovePress)()
    );
  };
  return (
    <Animated.View
      key={index}
      entering={FadeInDown.duration(150).delay(50 * index)}
      style={[{ transform: [{ translateX: positionX }] }]}
    >
      <List.Item
        title={title}
        titleStyle={styles.listTitle}
        style={styles.listItem}
        onPress={onPress}
        rippleColor={hexToRGB(theme.colors.primary, 0.3)}
        right={(props) => (
          <IconButton
            {...props}
            size={18}
            icon={"close"}
            // onPress={() =>
            //   runOnJS(handleRemoveFromBookmarks)(item)
            // }
            onPress={handleRemove}
          />
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 0.3,
  },
  listTitle: {
    fontFamily: "Primary-500",
    fontSize: 18,
  },
});
export default ListItem