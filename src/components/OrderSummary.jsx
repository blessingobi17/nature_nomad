import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";

const OrderSummary = ({ cartTotal }) => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="bg px-6 pt-6 pb-10">
        <h2 className=" text-xl font-medium border-b border-b-gray-200 pb-3 font-ptSerif">
          Order Summary
        </h2>
        <div className="flex w-full justify-between pt-6">
          <p className="text-sm">Standard Shipping</p>
          <p className="font-semibold text-sm">Free</p>
        </div>
        <p className="text-xs pb-8">
          If available, shop pickup options will display at checkout.
        </p>
        <div className="flex w-full justify-between border-b border-b-gray-200 pb-3">
          <p className="text-sm"> Bag Subtotal</p>
          <p className="font-semibold text-sm">{`$${cartTotal()}`}</p>
        </div>
        <Link to="/checkout">
          <button
            className="flex items-center justify-center gap-2 bg-black
           text-white dark:bg-white dark:text-black w-full py-3 rounded-full mt-14 
           hover:bg-gray-800 dark:hover:bg-slate-100"
          >
            Continue to Checkout
            <FaArrowRight />
          </button>
        </Link>
        <div className="flex md:flex-row flex-col pt-6 gap-3">
          <button className="flex items-center justify-center bg-purple-500 md:w-3/6 w-full py-2 rounded-md">
            <img src={stripe} alt="Stripe payment option" className="h-6" />
          </button>
          <button className="flex items-center justify-center bg-yellow-500 md:w-3/6 w-full py-2 rounded-md">
            <img src={paypal} alt="PayPal payment option" className="h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
