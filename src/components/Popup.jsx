import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Popup = ({ selectedItem, popup, selectedSize }) => {
  const { setPopup } = useContext(DataContext);

  const closePopup = () => {
    setPopup(false);
  };
  return (
    <main>
      {selectedItem && popup && (
        <section
          className="w-80 px-4 py-4 bg-white text-black dark:bg-white
         fixed top-32 right-16 rounded-lg z-50 popup shadow-2xl"
        >
          <div className="flex justify-between items-center pb-6">
            <h3 className="text-sm font-semibold">Success! Item Added</h3>
            <FaXmark onClick={closePopup} className="cursor-pointer" />
          </div>
          <div className="flex gap-3">
            <div>
              <img
                src={selectedItem.image}
                alt=""
                className="h-24 w-20 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-ptSerif text-lg">{selectedItem.name}</p>
              <p>{selectedSize}</p>
              <p className="font-medium">{`$${selectedItem.price}`}</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col pt-6 gap-2">
            <Link to="/cart" className="md:w-3/6 w-full">
              <button className="flex items-center justify-center bg-gray-300 w-full  py-2 rounded-full text-sm font-semibold">
                View Bag
              </button>
            </Link>
            <Link to="" className="md:w-3/6 w-full">
              <button className="flex items-center justify-center bg-black text-white w-full py-2 rounded-full text-sm font-semibold">
                Checkout
              </button>
            </Link>
          </div>
          <p
            className="text-sm underline text-center pt-6 cursor-pointer"
            onClick={closePopup}
          >
            Continue Shopping
          </p>
        </section>
      )}
    </main>
  );
};

export default Popup;
