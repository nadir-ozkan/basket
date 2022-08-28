// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
