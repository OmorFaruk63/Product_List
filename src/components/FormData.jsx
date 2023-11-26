import { useEffect, useState } from "react";

import "./FormData.css";
import ProductTable from "./ProductTable";

const FormData = () => {
  const [product, setProduct] = useState(getData());

  function getData() {
    const jsonData = localStorage.getItem("product");
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  }
  const [form, setForm] = useState({
    productName: "",
    productId: "",
    price: "",
    quantity: "",
    color: "",
  });

  const { productName, productId, price, quantity, color } = form;

  function getFormData(event) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProduct([...product, form]);

    setForm({
      productName: "",
      productId: "",
      price: "",
      quantity: "",
      color: "",
    });
    // console.log(formData);
  }

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  function edite(id) {
    const filterForm = product.filter((product) => {
      return product.productId !== id;
    });
    setProduct(filterForm);
  }
  return (
    <div className="container">
      <div>
        {/*---------------  Form-----------  */}
        <form onSubmit={handleSubmit}>
          Product Name:
          <input
            autoFocus
            type="text"
            value={productName}
            name="productName"
            onChange={getFormData}
          />
          <br />
          Product Id:
          <input
            type="number"
            value={productId}
            name="productId"
            onChange={getFormData}
          />{" "}
          <br />
          Price:
          <input
            type="number"
            value={price}
            name="price"
            onChange={getFormData}
          />
          <br />
          Quantity:
          <input
            type="number"
            value={quantity}
            name="quantity"
            onChange={getFormData}
          />
          <br />
          Choose a Color:
          <select value={color} onChange={getFormData} name="color">
            <option value="">Choose Color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <br />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
      </div>

      <div></div>
      {/*---------------  Table-----------  */}

      {product.length < 1 ? (
        <h1>No Product Added</h1>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>productName</th>
              <th>productId</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Delete</th>
            </tr>

            {product.map((item) => (
              <ProductTable key={item.productId} item={item} edite={edite} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FormData;
