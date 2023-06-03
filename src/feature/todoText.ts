import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TextState {
  text: string;
}

const initialState: TextState = {
  text: '',
}

export const todoTextSlice = createSlice({
  name: 'todoText',
  initialState,
  reducers: {
    setTextAction: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    delTextAction: (state) => {
      state.text = '';
    } 
  },
})

export const { setTextAction, delTextAction } = todoTextSlice.actions

export default todoTextSlice.reducer
