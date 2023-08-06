import { createSlice } from "@reduxjs/toolkit";  

const initialAddItem = { items : [] , }

const addCartItemSlice = createSlice({
    name : 'addCartItem',
    initialState : initialAddItem,
    reducers : {
        addItem(state,action){
            state.items = [...state.items , action.payload]
            
        }
    }
})

export const addCartItemActions = addCartItemSlice.actions

export default addCartItemSlice.reducer