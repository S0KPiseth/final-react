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
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
