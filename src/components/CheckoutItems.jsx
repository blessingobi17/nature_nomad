import { useContext } from "react";
import DataContext from "../context/DataContext";

const CheckoutItems = () => {
  const { cart, cartTotal } = useContext(DataContext);

  return (
    <main className="flex flex-col gap-6">
      {cart.map((item) => (
        <section
          className="flex items-center justify-between text-sm"
          key={item.id}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={item.image} alt="" className="h-16 w-16" />
              <span
                className="bg-gray-500 text-white h-5 w-5 rounded-full text-center
              absolute top-0 -right-2"
              >
                <p>{item.quantity}</p>
              </span>
            </div>
            <span>
              <p className="font-ptSerif">{item.name}</p>
              <p className="text-gray-400">{item.description}</p>
            </span>
          </div>
          <p>{`$${item.totalPrice}`}</p>
        </section>
      ))}
      <section className="text-sm font-ptSerif">
        <p className="text-gray-400">Discount code or gift card</p>
        <form action="" className="flex gap-4 text-black">
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="border w-full px-2 py-3 border-gray-300 bg-gray-50 dark:bg-gray-200 mt-1 outline-none"
          />
          <button
            type="submit"
            className="border border-gray-300 bg-gray-50 lg:px-10 px-4 py-3 rounded-full text-sm"
          >
            Apply
          </button>
        </form>
        <div className="pt-6 space-y-2">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p className="font-semibold">{`$${cartTotal()}`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p className="text-gray-400">Calculated at next step</p>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold">
            <p>Total</p>
            <p>{`$${cartTotal()}`}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutItems;
