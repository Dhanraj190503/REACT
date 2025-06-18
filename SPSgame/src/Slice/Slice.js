import {createSlice} from '@reduxjs/toolkit'

const spsSlice = createSlice({
    name:'sps',
    initialState:{value:'', msg:'', win:0, lose:0, tie:0, status:0},
    reducers:{
        computerAction:(state)=>{
            let compAction = ['Stone', 'Paper', 'Scissor'];

            let randomIndx = Math.floor(Math.random() * 3);

            state.value = compAction[randomIndx];
        },

        Checkaction:(state, action)=>{
            // This function will check the user action and computer action
            // and return the result of the game.

            const compAction = state.value;
            const userAction = action.payload.value;

            if(compAction === userAction){
                state.msg = `It's a Tie! Both chose ${userAction}`;
                state.tie += 1;
                state.status = 3;
            }
            else if(userAction === 'Stone' && compAction === 'Scissor' ||
                userAction === 'Paper' && compAction === 'Stone' ||
                userAction === 'Scissor' && compAction === 'Paper')
            {
                state.msg = `You Win! Your "${userAction}" Beats Computer's "${compAction}"`;
                state.win += 1;
                state.status = 1;
            }
            else{
                state.msg = `You Lose! Computer's "${compAction}" Beats Your "${userAction}"`;
                state.lose += 1;
                state.status = 2;
            }
        }


    }
})

export const {computerAction, Checkaction} = spsSlice.actions;
export default spsSlice.reducer;

