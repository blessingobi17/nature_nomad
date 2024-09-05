import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import WomenMenu from "./pages/WomenMenu";
import NewArrivalsWomen from "./pages/NewArrivalsWomen";
import WomensDress from "./pages/WomensDress";
import WomensTops from "./pages/WomensTops";
import WomensPants from "./pages/WomensPants";
import WomensJackets from "./pages/WomensJackets";
import Women from "./pages/Women";
import MenMenu from "./pages/MenMenu";
import NewArrivalsMen from "./pages/NewArrivalsMen";
import Men from "./pages/Men";
import MensTops from "./pages/MensTops";
import MensPants from "./pages/MensPants";
import MensJacket from "./pages/MensJacket";
import ItemsPage from "./pages/ItemsPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { DataProvider } from "./context/DataContext";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/womenMenu" element={<WomenMenu />} />
          <Route path="/newArrivalsWomen" element={<NewArrivalsWomen />} />
          <Route path="/dresses" element={<WomensDress />} />
          <Route path="/womensTops" element={<WomensTops />} />
          <Route path="/womensPants" element={<WomensPants />} />
          <Route path="/womensJackets" element={<WomensJackets />} />
          <Route path="/women" element={<Women />} />
          <Route path="/menMenu" element={<MenMenu />} />
          <Route path="/newArrivalsMen" element={<NewArrivalsMen />} />
          <Route path="/men" element={<Men />} />
          <Route path="/mensTops" element={<MensTops />} />
          <Route path="/mensPants" element={<MensPants />} />
          <Route path="/mensJacket" element={<MensJacket />} />
          <Route path="/item/:id" element={<ItemsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </>
    )
  );

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
