import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import AddProduct from "./pages/AddProduct";
import ProductsList from "./components/ProductsList";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
