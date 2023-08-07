import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { addCartItemActions } from '../../store/addCartItem';

const products = [
  {id : 1, title : 'Bhagavad Gita' , price : 295 , description : 'Way of living a good and moral life' },
  {id : 2, title : 'Wings of Fire' , price : 165 , description : 'Biography of Abdul Kalam'},
  {id : 3 ,title : 'Secret off Self Management' , price : 99 , description : 'Self management techniques and its advantages.'},
  
]

const Products = (props) => {

  const dispatch = useDispatch()

  const addItemHandler = (id) => {

    console.log(id)

    const addProduct = 
      {id : Number(id) , title : products[id-1].title , price : products[id-1].price , description : products[id-1].description , quantity : 1 , totalPrice : products[id-1].price}
    

    

    dispatch(addCartItemActions.addItem(addProduct))
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(data => 
          <ProductItem id={data.id} title={data.title} price={data.price} description ={data.description} addItem = {addItemHandler}/>
        )}
      </ul>
    </section>
  );
};

export default Products;
