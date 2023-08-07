import addCartItem, { addCartItemActions } from "./addCartItem";
import { notificationActions } from "./notificationSlice";
// import { cartA } from "./store";

export const fetchCartData = () => {

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://book-shop-dc783-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        addCartItemActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice : cartData.price,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.addNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  console.log(cart,"sending")
  return async (dispatch) => {
    dispatch(
      notificationActions.addNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    console.log(cart)
    const sendRequest = async () => {
      const response = await fetch(
        "https://book-shop-dc783-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      // console.log(response,"after posted")

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        notificationActions.addNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.addNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};