import { createSlice } from "@reduxjs/toolkit";  

const initialAddItem = { items : [] , }

const addCartItemSlice = createSlice({
    name : 'addCartItem',
    initialState : initialAddItem,
    reducers : {
        addItem(state,action){

            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === Number(newItem.id))
           
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
                state.items = state.items.filter((item)=> item.id != id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const addCartItemActions = addCartItemSlice.actions

export default addCartItemSlice.reducer


// {
//     id : newItem.id,
//     price : newItem.price,
//     quantity : 1,
//     title : newItem.title
// }