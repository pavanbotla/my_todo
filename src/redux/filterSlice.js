import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./filterStatus";
import { format } from "date-fns";

const currentDate = new Date();

const filtersInitialState = {
  status: statusFilters.all,
  selectedDate: format(currentDate, "MMMM d, yyyy"),
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const { setStatusFilter, setSelectedDate } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
