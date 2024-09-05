import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Popup from "../components/Popup";
import SizeButton from "../components/SizeButton";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { FaChevronDown } from "react-icons/fa";
import Modal from "../components/Modal";

const Men = () => {
  const {
    searchResults,
    toggle,
    setToggle,
    filter1,
    filter2,
    selectedFilter,
    resetFilter,
    popup,
    quickAddBtn,
    selectedItem,
    selectedSize,
    sizeBtns,
    handleItemClick,
    handleSizeSelect,
    dropdownRef,
  } = useContext(DataContext);

  return (
    <main className="py-6 w-full lg:px-20 px-6">
      <Modal />
      <Popup
        selectedItem={selectedItem}
        popup={popup}
        selectedSize={selectedSize}
      />
      <div className="flex gap-2 w-full justify-center pb-4 text-sm font-medium">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/men" className="text-gray-500">
          Men
        </Link>
      </div>
      <h1 className="md:text-5xl text-2xl font-semibold pb-2 font-ptSerif text-center">
        Men
      </h1>
      <div className="relative w-40 pt-6" ref={dropdownRef}>
        <span className="flex items-center gap-1">
          <p className="text-sm">{selectedFilter}</p>
          <FaChevronDown
            className={`cursor-pointer text-xs mt-1 ${
              toggle ? "rotate-180" : ""
            }`}
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </span>
        <ul
          className={
            toggle
              ? "bg-white text-black px-3 py-4 rounded-lg space-y-3 font-medium absolute top-14 z-50 w-full opacity-100 transition duration-200 ease-in-out shadow-2xl cursor-pointer"
              : "opacity-0 absolute"
          }
        >
          <li onClick={filter1}>$100 and under</li>
          <li onClick={filter2} className="pb-3">
            $100 and up
          </li>
          <li onClick={resetFilter} className="text-xs pt-2 border-t">
            Clear Filter
          </li>
        </ul>
      </div>
      {searchResults.length ? (
        <section className="grid lg:grid-cols-3 grid-cols-2 w-full justify-between md:gap-6 gap-3 pt-4">
          {searchResults.map((item) => (
            <div className="flex flex-col gap-1 pb-8" key={item.id}>
              <div className="itemImg relative w-full cursor-pointer flex flex-col items-center">
                <SizeButton
                  item={item}
                  selectedItem={selectedItem}
                  selectedSize={selectedSize}
                  handleSizeSelect={handleSizeSelect}
                  sizeBtns={sizeBtns}
                />
                <Link to={`/item/${item.id}`}>
                  <img
                    src={item.image}
                    alt=""
                    className="lg:h-hero md:h-auto h-64 object-cover mb-4"
                  />
                </Link>
                <div
                  className={
                    quickAddBtn
                      ? "addBtn opacity-0 absolute bottom-8 w-full flex justify-center px-4"
                      : "hidden"
                  }
                >
                  <button
                    className="lg:flex hidden gap-2 items-center justify-center w-full 
                   bg-black text-white dark:bg-black dark:text-white py-3 text-sm"
                    onClick={() => handleItemClick(item)}
                  >
                    <FaPlus className="h-2 w-2" /> Quick Add
                  </button>
                </div>
              </div>
              <p className="text-md">{item.name}</p>
              <p className="text-sm">{item.description}</p>
              <p className="font-semibold">{`$${item.price}`}</p>
            </div>
          ))}
        </section>
      ) : (
        <div className="text-center py-14">
          <h1 className="text-3xl font-semibold pb-2">Out of bounds</h1>
          <p className="text-sm">
            We’re sorry, but we can’t find anything for that search.
          </p>
        </div>
      )}
    </main>
  );
};

export default Men;
