import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import addCartItemReducer from './addCartItem';
import notificationReducer from './notificationSlice';

const store = configureStore({
    reducer: {
        cart : cartReducer,
        addCartItem : addCartItemReducer,
        notification : notificationReducer
    }
    
})

export default store;