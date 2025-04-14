import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import BetsService from "../../services/BetsService";
import { IAllBetsInfo } from "../../types/bets";
import { RootState } from "@reduxjs/toolkit/query";

interface IAllBetsState {
  bets: IAllBetsInfo[];
  filter: string;
  newStatus: IAllBetsInfo | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAllBetsState = {
  bets: [],
  filter: "All",
  newStatus: null,
  status: "idle",
  error: null,
};

export const getAllBetsInfo = createAsyncThunk<IAllBetsInfo[], void>(
  "bets/getAllBets",
  async (_: void, thunkAPI: any) => {
    try {
      const response = await BetsService.getAllBets();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch bets", error);
    }
  }
);

export const updateBetStatus = createAsyncThunk<
  IAllBetsInfo,
  { id: number; status: string }
>("bets/updateStatus", async ({ id, status }, { rejectWithValue }) => {
  try {
    const response = await BetsService.updateStatusById(id, status);
    return response;
  } catch (err) {
    return rejectWithValue("Failed to update status");
  }
});

export const allBetsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setBetStatus: (state, action: PayloadAction<IAllBetsInfo>) => {
      state.newStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBetsInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBetsInfo.fulfilled, (state, action) => {
        state.bets = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllBetsInfo.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateBetStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateBetStatus.fulfilled,
        (state, action: PayloadAction<IAllBetsInfo>) => {
          state.status = "succeeded";
          state.newStatus = { ...action.payload };
          const updatedBet = action.payload;
          const i = state.bets.findIndex((b) => b.betId === updatedBet.betId);
          state.bets[i] = updatedBet;
        }
      )
      .addCase(updateBetStatus.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});
export const { setFilter, setBetStatus } = allBetsSlice.actions;
// selector who reach part of data from redux state
export const selectAllBets = (state: RootState) => state.bets.bets;
export const selectNewStatus = (state: RootState) => state.bets.newStatus;
export default allBetsSlice.reducer;
