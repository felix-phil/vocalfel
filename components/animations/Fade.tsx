import React, { FC, ReactNode, useEffect } from "react";
import { Animated, ViewProps } from "react-native";

interface IProps extends ViewProps {
  keyChange?: any;
//   children: ReactNode | ReactNode[];
  duration?: number;
  delay?: number;
}
const Fade: FC<IProps> = ({
  keyChange = "key",
  duration = 500,
  delay = 0,
  children,
  style,
  ...rest
}) => {
  const animatedValue = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: duration,
      delay: delay,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: duration,
        delay: delay,
      }).start();
    });
  };
  useEffect(() => {
    startAnimation();
  }, [keyChange]);

  return (
    <Animated.View style={[style, { opacity: animatedValue }]} {...rest}>
      {children}
    </Animated.View>
  );
};

export default Fade;
