import "./App.css";
import Landing from "./pages/Landing";
import Icon from "./components/icon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./components/cart";
import { useState, useEffect } from "react";
import FirstTimeLoad from "./components/firstTimeLoad";

const imageAssets = ["./img/middleLeaf.png", "./img/webicon.png"];

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalAssets = imageAssets.length + 1;

  useEffect(() => {
    // Load images
    imageAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad;
    });

    // Load fonts
    const fonts = [new FontFace("Qurova", "url(./font/Qurova/QurovaDEMO-Regular.otf)", { weight: "400" }), new FontFace("Qurova", "url(./font/Qurova/QurovaDEMO-Medium.otf)", { weight: "500" }), new FontFace("Liebling", "url(./font/Liebling/fonnts.com-Liebling_Medium.otf)", { weight: "500" })];

    Promise.all(fonts.map((f) => f.load())).then((loaded) => {
      loaded.forEach((f) => document.fonts.add(f));
      handleAssetLoad(); // Count fonts
    });
  }, []);

  const handleAssetLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const loadingPercent = Math.round((loadedCount / totalAssets) * 100);

  return (
    <>
      {loadedCount < totalAssets ? (
        <FirstTimeLoad value={loadingPercent} />
      ) : (
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
            <p className="block md:hidden bg-green-100 text-center w-full p-2">
              <a href="#" className="underline">
                Get 10% off
              </a>{" "}
              your first order! Use code: GREEN10
            </p>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
