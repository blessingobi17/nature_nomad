import { FaCircleXmark } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const Modal = () => {
  const { modalImg } = useContext(DataContext);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [shoppingFor, setShoppingFor] = useState("");

  // modal
  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // submit function in modal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
      setModal(false);
    }
  };

  return (
    <section>
      <div className={modal ? "modal block" : "hidden"}>
        <div className="absolute top-24 mt-0 w-full flex justify-center">
          <div
            className="lg:w-3/5 md:w-4/5 w-full bg-white dark:text-black md:pr-8 pr-0 md:rounded-xl flex 
            justify-between relative"
          >
            <img
              src={modalImg}
              alt=""
              className="w-2/5 md:rounded-tl-xl md:rounded-bl-xl
               rounded-bl-0 object-cover"
            />
            <div className="md:w-2/4 w-full py-10 md:px-0 px-6">
              <article>
                <h1 className="md:text-3xl text-xl font-semibold pb-3">
                  Want 20% off
                </h1>
                <p className="md:text-sm text-xs font-medium">
                  Sign up to receive 20% off your first purchase, big
                  announcements and special offers
                </p>
                <span className="text-xs italic font-ptSerif">
                  *Applies to first customers and orders over $100*
                </span>
              </article>
              <form action="" className="pt-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`md:text-sm text-xs border ${
                    isEmailEmpty ? "border-red-500" : "border-black"
                  } outline-0 px-3 py-2 w-full`}
                />
                <div className="pt-6">
                  <fieldset>
                    <legend className="md:text-sm text-xs font-semibold pb-2">
                      Shopping for:
                    </legend>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="shoppingFor"
                          id="women"
                          value="Women"
                          checked={shoppingFor === "Women"}
                          onChange={(e) => setShoppingFor(e.target.value)}
                          className="h-4 w-4"
                        />
                        <label
                          htmlFor="women"
                          className="md:text-sm text-xs font-medium"
                        >
                          Women
                        </label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="shoppingFor"
                          id="men"
                          value="Men"
                          checked={shoppingFor === "Men"}
                          onChange={(e) => setShoppingFor(e.target.value)}
                          className="h-4 w-4"
                        />
                        <label
                          htmlFor="men"
                          className="md:text-sm text-xs font-medium"
                        >
                          Men
                        </label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="shoppingFor"
                          id="both"
                          value="Both"
                          checked={shoppingFor === "Both"}
                          onChange={(e) => setShoppingFor(e.target.value)}
                          className="h-4 w-4"
                        />
                        <label
                          htmlFor="both"
                          className="md:text-sm text-xs font-medium"
                        >
                          Both
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text-white lg:px-10 px-4 py-3 rounded-full mt-6 md:text-sm text-xs"
                  >
                    Sign Up Now
                  </button>
                </div>
              </form>
            </div>
            <FaCircleXmark
              className="absolute top-4 right-4 cursor-pointer h-5 w-5"
              onClick={() => setModal(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
