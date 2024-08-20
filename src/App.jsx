import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import products from "./products";

function App() {
  return (
    <>
      <NavBar />
      <h1>List of Products</h1>
      {/* // use map function to map throgh the array products and pass each produc into the product component */}
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
