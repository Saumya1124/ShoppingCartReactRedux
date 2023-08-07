import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect , useState} from 'react';
import Notification from './components/UI/Notification';
import { notificationActions } from './store/notificationSlice';
import { sendCartData } from './store/cartActions';

let isInitial = true

function App() {
  

  const addCartItem = useSelector(state => state.addCartItem.items)

  const notification = useSelector(state => state.notification.notification)

  const dispatch = useDispatch()


  useEffect( () => {

    if(isInitial){
      isInitial=false
      return
    }
    dispatch(sendCartData(addCartItem))
  

} ,[addCartItem , dispatch])

 console.log(addCartItem)





  return (
    <Fragment>

        {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
        
        <Layout>
          <Cart />
          <Products />
        </Layout>
    </Fragment>
  );
}

export default App;
