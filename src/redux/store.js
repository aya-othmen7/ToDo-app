import { configureStore } from '@reduxjs/toolkit'
import  taskSlice  from './TaskSlice/TaskSlice'

export const store = configureStore({
  reducer: {
    task:taskSlice
  },
})
