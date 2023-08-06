import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const { title, price, description } = props;

  const addItemHandler = (event) => {
    const id = event.target.id
    props.addItem(id)

  }


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler} id={props.id}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
