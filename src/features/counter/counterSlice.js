import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementByAmount: (state, actions) => { state.count += actions.payload },
        reset: (state) => { state.count = 0 },
    }
});



export const selectCount = (state) => state.value;
export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;