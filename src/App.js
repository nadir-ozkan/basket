// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import ProductList from "./components/ProductList";
import TestCases from "./components/TestCases";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="test-cases" element={<TestCases />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
