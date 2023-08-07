import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { Fragment } from 'react';


const Cart = (props) => {

  const cartOpen = useSelector(state => state.cart.isOpen)

  const dispatch = useDispatch()

  const addCartItem = useSelector(state => state.addCartItem.items);

  console.log(addCartItem)

  return (

    <Fragment>
           {cartOpen && 
                <Card className={classes.cart}>
                <h2>Your Shopping Cart</h2>
                <ul>


                  {addCartItem.map((data)=>
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
