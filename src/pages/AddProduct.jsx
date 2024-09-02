const AddProduct = () => {
  // create a piece of State for storing products
  // State for the new product name

  // Function to handle adding a new product

  // Add the new product to the list
  // Clear the input field

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product App</h1>
      <input
        type="text"
        // give the value of state to the input
        // Update the state on input change
        placeholder="Enter product name"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button style={{ padding: "10px", marginLeft: "10px" }}>
        Add Product
      </button>

      <h2>Product List</h2>
      <ul>{/* Display each product in the list */}</ul>
    </div>
  );
};

export default AddProduct;
