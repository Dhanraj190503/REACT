import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState: {value: 0},
    reducers: {
        Increment: (state) =>{
            state.value += 1 //Increase The number by 1
        },
        Decrement: (state) =>{
            if(state.value <= 0) {
                alert('Your count has reached to 0.');
            }
            else{
                state.value -= 1 //Decrement The number by 1
            }
        },
        AddbyAmount: (state, action) =>{
            state.value = state.value + action.payload.text ; //ADD by The number Given Value
        },
    },
})

export const{Increment, Decrement, AddbyAmount} = counterSlice.actions;
export default counterSlice.reducer;