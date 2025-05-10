import "./App.css";
import Landing from "./pages/Landing";
import Icon from "./components/icon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./components/cart";
import { useState } from "react";

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <BrowserRouter>
      <div className="top-0 w-full z-50 fixed">
        <Icon setIsOpenCart={setIsOpenCart} />
      </div>
      {isOpenCart && <Cart setIsOpenCart={setIsOpenCart} />}
      <Routes>
        <Route path="/" element={<Landing isOpenCart={isOpenCart} />} />
        <Route path="/shop" element={<Shop isOpenCart={isOpenCart} />} />
      </Routes>
      <div className="fixed top-0 w-full">
        <div className="invisible">
          <Icon setIsOpenCart={setIsOpenCart} />
        </div>
        <p className="block md:hidden bg-green-100 text-center  w-full p-2">
          <a href="" className="underline ">
            Get 10% off
          </a>{" "}
          your first order! Use code: GREEN10
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
