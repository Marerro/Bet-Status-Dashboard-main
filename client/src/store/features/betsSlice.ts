import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BetsService from "../../services/BetsService";
import { IAllBetsInfo } from "../../types/bets";
import { RootState } from "@reduxjs/toolkit/query";

interface IAllBetsState {
  AllBets: IAllBetsInfo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAllBetsState = {
  AllBets: [],
  status: "idle",
  error: null,
};

export const getAllBetsInfo = createAsyncThunk<IAllBetsInfo[], void>(
  "AllBets/getAllBets",
  async (_: void, thunkAPI: any) => {
    try {
      const response = await BetsService.getAllBets();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch bets");
    }
  }
);

export const allBetsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBetsInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBetsInfo.fulfilled, (state, action) => {
        state.AllBets = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllBetsInfo.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});
// selector who reach part of data from redux state
export const getAllBets = (state: RootState) => state.bets.AllBets;
export default allBetsSlice.reducer;
