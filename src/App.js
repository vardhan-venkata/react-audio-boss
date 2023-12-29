import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import HeadPhones from "./pages/headphones/HeadPhones";
import Speakers from "./pages/speakers/Speakers";
import EarPhones from "./pages/earphones/EarPhones";
import Product from "./pages/prodact/Product";
import Cart from "./pages/cart/Cart";
import Page404 from "./pages/page404/Page404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HeadPhones" element={<HeadPhones />} />
      <Route path="/Speakers" element={<Speakers />} />
      <Route path="/EarPhones" element={<EarPhones />} />
      <Route path="/Product/:name" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
