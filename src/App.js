import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Dashboard";
import ProductsContainer from "./pages/ProductsContainer";
import Product from "./pages/Product";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="nav-header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<ProductsContainer />} />
            <Route path="/products/:id" exact element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
