import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import TestCases from "./components/TestCases";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="test-cases" element={<TestCases />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
