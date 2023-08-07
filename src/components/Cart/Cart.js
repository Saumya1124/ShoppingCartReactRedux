import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { Fragment, useEffect, useState } from 'react';
import { fetchCartData } from '../../store/cartActions';



const Cart = (props) => {

  const cartOpen = useSelector(state => state.cart.isOpen)

  const addCartItem = useSelector(state => state.addCartItem.items)

  const dispatch = useDispatch()

  const getData = useSelector(state => state.addCartItem.items)


  useEffect( () => {

    dispatch(fetchCartData(addCartItem))
  

} ,[dispatch])


  

  return (

    <Fragment>
           {cartOpen && 
                <Card className={classes.cart}>
                <h2>Your Shopping Cart</h2>
                <ul>


                  {getData.map((data)=>
                      <CartItem
                      item={{ id : data.id , title: data.title , quantity: data.quantity , total: data.totalPrice, price: data.price  }}
                      />                  
                  )}
                  
                 
                </ul>
              </Card>
              
           }
    </Fragment>

    
    
    
  );
};



export default Cart;
