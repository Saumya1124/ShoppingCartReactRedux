import classes from './CartButton.module.css';
import {useDispatch , useSelector} from 'react-redux';
import {cartActions} from '../../store/cartSlice';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const addCartItem = useSelector(state => state.addCartItem.items)

  const openCartHandler = () => {
    dispatch(cartActions.openCart())
  }
   
  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{addCartItem.length}</span>
    </button>
  );
};

export default CartButton;
