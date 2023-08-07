import { createSlice } from "@reduxjs/toolkit"; 
import { notificationActions } from './notificationSlice'; 

const initialAddItem = { items : [] , }

const addCartItemSlice = createSlice({
    name : 'addCartItem',
    initialState : initialAddItem,
    reducers : {
        addItem(state,action){

            const newItem = action.payload
            console.log(newItem)
            const existingItem = state.items.find((item) => item.id === Number(newItem.id))
            // console.log(existingItem.totalPrice)
           
            if(!existingItem){
                state.items.push(newItem)
            }
            else{
                existingItem.quantity++ ;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItem(state,action){
            const id = action.payload
            const existingItem = state.items.find((item) => item.id === id)
            
            if(existingItem.quantity ===1){
                state.items = state.items.filter((item)=> item.id !== id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
    }
})



export const addCartItemActions = addCartItemSlice.actions

export default addCartItemSlice.reducer

