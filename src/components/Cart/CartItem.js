import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addCartItemActions } from '../../store/addCartItem';


const CartItem = (props) => {
  const { title, quantity, total, price , id} = props.item;

  const dispatch = useDispatch()

  const addItemHandler = (event) => {
    const id = event.target.id
    console.log(id)
    dispatch(addCartItemActions.addItem({id : id , title : title, price : price }))
  }

  const removeItemHandler = (event) => {
    const id = Number(event.target.id)
    dispatch(addCartItemActions.removeItem(id))
    
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          {/* <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span> */}
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler } id = {id}>-</button>
          <button onClick={addItemHandler} id = {id}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
