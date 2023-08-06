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
                 <CartItem
                    item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
                  />
                </ul>
              </Card>
              
           }
    </Fragment>

    
    
    
  );
};

export default Cart;
