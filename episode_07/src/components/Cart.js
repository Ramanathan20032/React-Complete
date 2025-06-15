import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearItem, removeItem } from "../utils/CartSlice";

const Cart = () => {
  const Dispatch = useDispatch();

  // * [clearCart] is a function from redux that clears the cart
  const handleClearCart = () => {
    Dispatch(clearItem());
  };

  // * [handleRemoveItem] is a function that removes an item from the cart
  const handleRemoveItem = (index) => {
    Dispatch(removeItem(index))
  }

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items:", cartItems);

  return (
    <>
      <div className="max-w-3xl mx-auto shadow-md rounded-xl m-7 p-5">
        <h1 className="text-center text-2xl font-medium">Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <CartItemList key={item.id} itemData={item} onRemove={() => handleRemoveItem(index)}/>;
          })   
        ) : (
          <div className="text-center text-sm font-sm">No items in cart</div>
        )}
      </div>
      <div className="clearCart fixed bottom-2 right-2">
        <button
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart ({cartItems.length})
        </button>
      </div>
    </>
  );
};

export default Cart;
