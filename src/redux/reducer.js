import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //Adding tasks
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove tasks
    removeTasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update tasks
    updateTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
            // photo: action.payload.photo,
          };
        }
        return task;
      });
    },
    //completed
    completeTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
      },
    
    //Not completed
    notCompleteTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: false,
          };
        }
        return task;
      });
    },
  },
});

export const { addTasks, removeTasks, updateTasks, completeTasks, notCompleteTasks } =
  addTaskReducer.actions;
export const reducer = addTaskReducer.reducer;
