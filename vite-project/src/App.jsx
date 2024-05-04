import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Cart from "./Cart.jsx";
import Error from "./Error.jsx";
import Header from "./components/Header.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Single/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
