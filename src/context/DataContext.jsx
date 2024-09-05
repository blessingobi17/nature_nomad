import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [reqType, setReqType] = useState(
    () => localStorage.getItem("reqType") || "women"
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [popup, setPopup] = useState(false);
  const [quickAddBtn, setQuickAddBtn] = useState(true);
  const [sizeBtns, setSizeBtns] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Price");
  const dropdownRef = useRef(null);
  const [modalImg, setModalImg] = useState(null);

  // Search items
  useEffect(() => {
    const filteredResult = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResult);
  }, [data, search]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      if (reqType) {
        try {
          const response = await axios.get(`${reqType}.json`);
          setData(response.data);
          setFilteredData(response.data);
        } catch (err) {
          console.log(`Error : ${err.message}`);
        }
      }
    };

    fetchData();
  }, [reqType]);

  // Add to cart
  const addToCart = (item) => {
    const newCart = [...cart];

    const itemIndex = newCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      newCart[itemIndex].quantity += 1;
      newCart[itemIndex].totalPrice = newCart[itemIndex].quantity * item.price;
    } else {
      newCart.push(item);
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Increase item quantity
  const increaseQuantity = (id) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          }
        : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Decrease item qunatity
  const decreaseQuantity = (id) => {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.price,
          }
        : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Cart total
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  // Quick add
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setPopup(false);
    setQuickAddBtn(false);
    setSizeBtns(true);
    setTimeout(() => {
      setSizeBtns(false);
      setQuickAddBtn(true);
    }, 4000);
  };

  // Select size
  const handleSizeSelect = (size, item) => {
    setSelectedSize(size);
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 6000);

    addToCart({ ...item, selectedSize: size });

    setSizeBtns(false);
    setQuickAddBtn(true);
  };

  // Item's page size select
  const itemSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Filter by price
  const filter1 = () => {
    const result = filteredData.filter((item) => item.price <= 100);
    setSearchResults(result);
    setToggle(false);
    setSelectedFilter("$100 and under");
  };

  const filter2 = () => {
    const result = filteredData.filter((item) => item.price >= 100);
    setSearchResults(result);
    setToggle(false);
    setSelectedFilter("$100 and up");
  };

  const resetFilter = () => {
    setSearchResults(filteredData);
    setToggle(false);
    setSelectedFilter("Price");
  };

  // Close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        searchResults,
        setSearchResults,
        toggle,
        setToggle,
        reqType,
        setReqType,
        setData,
        cart,
        setCart,
        search,
        setSearch,
        addToCart,
        selectedItem,
        selectedSize,
        setSelectedSize,
        popup,
        setPopup,
        quickAddBtn,
        sizeBtns,
        handleItemClick,
        handleSizeSelect,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
        itemSizeSelect,
        filter1,
        filter2,
        selectedFilter,
        setSelectedFilter,
        resetFilter,
        filteredData,
        dropdownRef,
        modalImg,
        setModalImg,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
