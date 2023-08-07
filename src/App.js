import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect , useState} from 'react';
import Notification from './components/UI/Notification';
import { notificationActions } from './store/notificationSlice';

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

  

    dispatch(notificationActions.addNotification({show:true , status:'sending',title:'Sending...', message:'Sending cart data!'}))

      const res = fetch('https://book-shop-dc783-default-rtdb.firebaseio.com/cart.json',{
      method : 'PUT',
      body : JSON.stringify(addCartItem),
      headers : {
        'content-type' : 'application/json'
      }
    })

    

    res.then(res => {
       if(res.ok){
            res.json().then(data => {
                console.log(data)
                dispatch(notificationActions.addNotification({show : true ,status:'success',title:'Success!',message:'Sent cart data successfully!'}))

            })
       }
       else{
            console.log('Error has occured')
            dispatch(notificationActions.addNotification({show : true ,status:'error',title:'Error!',message:'Sending error message failed!'}))
           
       }
    }) 
    
  

} ,[addCartItem , dispatch])





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
