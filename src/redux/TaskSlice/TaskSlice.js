import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasklist: [
    {
      id: Math.random(),
      title: "todo item 1",
      description: "descrition todo item 1",
      isDone: false,
    },

    {
      id: Math.random(),
      title: "todo item 2",
      description: "descrition todo item 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 3",
      description: "descrition todo item 3",
      isDone: true,
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasklist.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasklist = state.tasklist.filter(
        (el) => el.id !== action.payload.id
      );
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
