import CartItems from "../components/CartItems";
import EmptyCart from "../components/EmptyCart";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Cart = () => {
  const {
    cart,
    setCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    selectedSize,
  } = useContext(DataContext);

  return (
    <main className="py-6 w-full">
      {/* Conditional rendering: Show a message if the cart is empty */}
      {cart.length ? (
        ""
      ) : (
        <h1 className="md:text-3xl text-2xl font-medium pb-2 text-center">
          Your Cart Is Empty.
        </h1>
      )}

      {/* Section containing either the cart items or the empty cart message */}
      <section>
        {cart.length ? (
          <CartItems
            cart={cart}
            setCart={setCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cartTotal={cartTotal}
            selectedSize={selectedSize}
          />
        ) : (
          <EmptyCart />
        )}
      </section>
    </main>
  );
};

export default Cart;
