import { createSlice } from "@reduxjs/toolkit";



const initialCartState = { isOpen : false }

const cartSlice = createSlice({

    name : 'cart',
    initialState : initialCartState,
    reducers : {
        openCart(state){
            state.isOpen  = !state.isOpen
        },
        
    }


})




export const cartActions = cartSlice.actions;

export default cartSlice.reducer