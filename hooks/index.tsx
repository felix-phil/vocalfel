import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "../store";

import type { AppTheme } from "../constants/themes";
import { useTheme } from "react-native-paper";
import { RealmContext } from "../models";

export const useAppTheme = () => {
  const theme = useTheme<AppTheme>();
  return theme;
};
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { useRealm, useObject, useQuery } = RealmContext;
