import { FaXmark, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import OrderSummary from "../components/OrderSummary";

const CartItems = ({
  cart,
  setCart,
  increaseQuantity,
  decreaseQuantity,
  cartTotal,
}) => {
  // delete items from cart
  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // cart quantity function
  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // quantity change function
  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Number(value),
          totalPrice: Number(value) * item.price,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main className="w-full flex md:flex-row flex-col md:gap-0 gap-8 justify-between">
      <section className="md:w-3/5 w-full lg:pr-10 lg:pl-20 pl-6 pr-6 ">
        <p
          className="py-4 mb-4 bg-gray-100 dark:bg-gray-800 text-center 
        md:text-xl text-sm font-medium font-ptSerif"
        >
          Free Shipping on orders over $75 in the U.S.
        </p>
        <div className="flex w-full justify-between border-b border-b-gray-200 pb-3">
          <h3 className="font-ptSerif text-xl font-medium ">Your bag</h3>
          <p>{`${cartQuantity()} items`}</p>
        </div>
        {cart.map((item) => (
          <article
            key={item.id}
            className="flex w-full py-6 border-b border-b-gray-200"
          >
            <img
              src={item.image}
              alt="Cart Items"
              className=" h-40 w-32 object-cover mr-4"
              loading="lazy"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-md">{item.name}</p>
                  <p className="text-sm">{item.description}</p>
                  <p className="font-medium text-sm">{item.selectedSize}</p>
                </div>
                <button onClick={() => handleDelete(item.id)}>
                  <FaXmark className="cursor-pointer" />
                </button>
              </div>
              <div className="flex items-end w-full justify-between">
                <div>
                  <p className="font-ptSerif text-sm">Quantity</p>
                  <div className="flex items-center gap-2 pt-2">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <FaCircleMinus className="cursor-pointer" />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="lg:w-14 w-10 outline-0 border border-black text-center text-black rounded-md "
                    />
                    <button onClick={() => increaseQuantity(item.id)}>
                      <FaCirclePlus className="cursor-pointer" />
                    </button>
                  </div>
                </div>
                <p>{`$${item.totalPrice}`}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="md:w-2/5 w-full bg-gray-100 dark:bg-gray-800 lg:px-8 px-5 lg:py-8 py-5">
        <OrderSummary cartTotal={cartTotal} />
      </section>
    </main>
  );
};

export default CartItems;
