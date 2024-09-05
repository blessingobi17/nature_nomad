import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import collection1 from "../assets/images/collection_1.png";
import collection2 from "../assets/images/collection_2.png";

const MainLayout = () => {
  const {
    setReqType,
    setSelectedFilter,
    setSearchResults,
    filteredData,
    setSelectedSize,
    setPopup,
    setModalImg,
  } = useContext(DataContext);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (
      path === "/womenMenu" ||
      path === "/women" ||
      path === "/newArrivalsWomen"
    ) {
      setReqType("women");
      setSelectedFilter("price");
      setSearchResults(filteredData);
      setSelectedSize("");
      setPopup(false);
      setModalImg(collection2);
    } else if (
      path === "/menMenu" ||
      path === "/men" ||
      path === "/newArrivalsMen"
    ) {
      setReqType("men");
      setSelectedFilter("price");
      setSearchResults(filteredData);
      setSelectedSize("");
      setPopup(false);
      setModalImg(collection1);
    }
  }, [location.pathname]);

  return (
    <>
      <main
        className={
          isDarkMode ? "dark bg-slate-950 text-white " : "bg-white text-black "
        }
      >
        <ScrollTop />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
