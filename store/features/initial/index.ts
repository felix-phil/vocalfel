import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialTypes } from "../../types";
import { setOnboard } from "./action";

const initialState: InitialTypes = {
  onboardpassed: false,
};
const initialSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    markOnboardPassedStore: (state) => {
      state.onboardpassed = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setOnboard.fulfilled,
      (state, action: PayloadAction<{ onboadPassed: boolean }>) => {
        state.onboardpassed = action.payload.onboadPassed;
      }
    );
  },
});
export const { markOnboardPassedStore } = initialSlice.actions;
export { setOnboard };
export default initialSlice.reducer;
