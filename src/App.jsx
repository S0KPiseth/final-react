import "./App.css";
import Landing from "./pages/Landing";
import Icon from "./components/icon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="absolute top-0 w-full z-99">
        <Icon />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
