import { useState } from "react";

const ProductAddForm = () => {
  // define a State for storing all products
  // define a State for the current product details

  // Handle input change and update product state
  const handleInputChange = () => {};

  // Function to handle adding a new product
  const addProduct = (e) => {
    e.preventDefault();
    if (
      product.name &&
      product.price &&
      product.brand &&
      product.description &&
      product.image
    ) {
      // Add new product to the list
      // Reset form fields
    }
  };

  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Add Product</h1>
        <form
          style={{
            width: "80%",
            margin: "auto ",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              style={{ padding: "10px", width: "600px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <textarea
              name="description"
              placeholder="Product Description"
              style={{
                padding: "10px",
                width: "600px",
                marginBottom: "10px",
                height: "60px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              style={{ padding: "10px", width: "600px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="brand"
              placeholder="Product Brand"
              style={{ padding: "10px", width: "600px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              style={{ padding: "10px", width: "600px", marginBottom: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductAddForm;
