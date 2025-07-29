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
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { incrementByAmount } = counterSlice.actions;

export default taskSlice.reducer;
