import { Link } from "react-router-dom";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";
import { FaChevronLeft } from "react-icons/fa";
import CheckoutItems from "../components/CheckoutItems";

const Checkout = () => {
  return (
    <main className="md:py-14 pt-6 pb-14 w-full lg:px-20 md:px-40 px-6 ">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 justify-between">
        <section className="lg:w-1/2 w-full">
          <p className="text-sm font-ptSerif text-center text-gray-400">
            Express Checkout
          </p>
          <div className="flex md:flex-row flex-col py-10 gap-3">
            <button className="flex items-center justify-center bg-purple-500 md:w-3/6 w-full py-2 rounded-md">
              <img src={stripe} alt="" className="h-6" />
            </button>
            <button className="flex items-center justify-center bg-yellow-500 md:w-3/6 w-full py-2 rounded-md">
              <img src={paypal} alt="" className="h-6" />
            </button>
          </div>
          <p className="text-sm font-ptSerif text-center text-gray-400">OR</p>
          <div className="pt-6">
            <h2 className="text-xl font-medium pb-5">Shipping address</h2>
            <form action="" className="flex flex-col gap-3 text-black text-xs">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-ptSerif text-gray-400"
                >
                  Country/Region
                </label>
                <select
                  name="country"
                  defaultValue=""
                  className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                >
                  <option value="Canada" disabled hidden></option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                </select>
              </div>
              <div className="flex md:flex-row flex-col items-center md:gap-4 gap-2">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-xs font-ptSerif text-gray-400"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-xs font-ptSerif text-gray-400"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-ptSerif text-gray-400"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-ptSerif text-gray-400"
                >
                  Apartment, suite, etc. (optional)
                </label>
                <input
                  type="text"
                  className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                />
              </div>
              <div className="flex md:flex-row flex-col items-center md:gap-4 gap-2">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-xs font-ptSerif text-gray-400"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-xs font-ptSerif text-gray-400"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-xs font-ptSerif text-gray-400"
                  >
                    ZIP code
                  </label>
                  <input
                    type="text"
                    className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-ptSerif text-gray-400"
                >
                  Phone (optional)
                </label>
                <input
                  type="text"
                  className="border w-full px-2 py-3 border-gray-300 bg-gray-50 mt-1 outline-none dark:bg-gray-200"
                />
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center pt-8">
            <Link to="/cart">
              <span className="flex items-center text-sm gap-2">
                <FaChevronLeft />
                <p className="text-sm">Return to cart</p>
              </span>
            </Link>
            <button
              className="bg-black dark:bg-white text-white dark:text-black
                      lg:px-10 px-4 py-3 rounded-full text-sm hover:bg-gray-800 dark:hover:bg-slate-100"
            >
              Continue to shipping
            </button>
          </div>
        </section>
        <section className="lg:w-5/12 w-full ">
          <CheckoutItems />
        </section>
      </div>
    </main>
  );
};

export default Checkout;
