import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Missing from "../components/Missing";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Reviews from "../components/Reviews";

const ItemsPage = () => {
  const { data, addToCart, itemSizeSelect, selectedSize } =
    useContext(DataContext);

  const { id } = useParams();
  const item = data.find((item) => item.id.toString() === id);
  const navigate = useNavigate();

  // add to cart
  const handleAddToCart = () => {
    addToCart({ ...item, selectedSize: selectedSize });
    navigate("/cart");
  };

  // scroll to review section
  const scrollToReview = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <main className="py-6 w-full lg:px-20 px-6">
      {item && (
        <section>
          <div className="flex gap-2 w-full justify-center pb-10 text-sm font-medium">
            <p className="text-gray-500">{item.name}</p>
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <div className="md:w-3/5 w-full">
              <img src={item.image} alt="" className="w-full" />
            </div>
            <div className="md:w-itemDetails w-full pt-10">
              <p className="text-3xl font-medium font-ptSerif pb-4">
                {item.name}
              </p>
              <div className="flex gap-3 items-center pb-4 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <span className="flex gap-2">
                    <FaStar className="h-2 w-2" />
                    <FaStar className="h-2 w-2" />
                    <FaStar className="h-2 w-2" />
                    <FaStar className="h-2 w-2" />
                    <FaStar className="h-2 w-2" />
                  </span>
                  <p className="text-xs font-medium">257</p>
                </div>
                <span className="text-gray-300">|</span>
                <p
                  className="text-sm underline font-medium"
                  onClick={scrollToReview}
                >
                  View All Reviews
                </p>
              </div>
              <p className="text-xs">{item.description}</p>
              <section>
                <p className="italic text-sm pt-4">
                  Size:{" "}
                  <span className="font-semibold not-italic">
                    {selectedSize}
                  </span>
                </p>
                <div className="w-full flex pt-2">
                  {item.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 py-3 hover:bg-gray-200 font-medium text-sm border border-gray-200 dark:hover:text-black"
                      onClick={() => itemSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>
              <button
                className="flex items-center justify-center gap-2 bg-black
               text-white dark:bg-white dark:text-black w-full py-3 rounded-full mt-10 
               hover:bg-gray-800 dark:hover:bg-slate-100"
                onClick={handleAddToCart}
              >
                {`Add to Bag $${item.price}`}
              </button>
            </div>
          </div>
          <Reviews />
        </section>
      )}
      {!item && (
        <>
          <Missing />
        </>
      )}
    </main>
  );
};

export default ItemsPage;
