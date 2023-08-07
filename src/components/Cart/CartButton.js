import classes from './CartButton.module.css';
import {useDispatch , useSelector} from 'react-redux';
import {cartActions} from '../../store/cartSlice';
import { useEffect} from 'react';
import { fetchCartData } from '../../store/cartActions';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const addCartItem = useSelector(state => state.addCartItem.items)

  const openCartHandler = () => {
    dispatch(cartActions.openCart())
    
  }


  const getData = useSelector(state => state.addCartItem.items)


  useEffect( () => {

    dispatch(fetchCartData(addCartItem))
  

} ,[dispatch])

   
  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{getData.length}</span>
    </button>
  );
};

export default CartButton;
