import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import addCartItemReducer from './addCartItem';

const store = configureStore({
    reducer: {
        cart : cartReducer,
        addCartItem : addCartItemReducer
    }
    
})

export default store;