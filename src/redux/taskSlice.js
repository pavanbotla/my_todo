import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksInitialState } from "./initialState";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, date, time, category, notes) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
            date,
            time,
            category,
            notes,
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
