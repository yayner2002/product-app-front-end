import products from "../products";
import Product from "./Product";

const ProductsList = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
