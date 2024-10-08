/* eslint-disable react/prop-types */
import Product from "./Product";
import products from "../products"

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
          <Product product={product} key={product.name} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
