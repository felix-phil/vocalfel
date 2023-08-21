import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkOnboard } from "../../../helpers/storages";

export const setOnboard = createAsyncThunk(
  "auth/onboard",
  async (_: undefined, thunkApi) => {
    try {
      const onboadPassed = await checkOnboard();
      return { onboadPassed };
    } catch (err) {
      const error = new Error("Unable to get storage");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);