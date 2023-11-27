import { useEffect, useState } from "react";

import ProductTable from "./ProductTable";

import "./FormData.css";

const FromData = () => {
  //Get Data From LocalStorage
  function getData() {
    const jsonData = localStorage.getItem("product");
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  }

  const [Product, setProduct] = useState(getData());

  const elementsObj = {};
  //  Product Submit
  function handleSubmit(e) {
    e.preventDefault();

    //Collecting product id for unique id
    const ary = [];
    Product.map((item) => {
      ary.push(item.productId);
    });

    const elements = [...e.target.elements];
    elements.map((element) => {
      //Checking input fild is Emty
      if (element.value !== "") {
        elementsObj[element.name] = element.value;
      }
      element.value = "";
    });

    //checking product Id
    if (!ary.includes(elementsObj.productId)) {
      setProduct([...Product, elementsObj]);
    } else {
      alert("Same Id");
    }
    console.log(elementsObj);
  }

  // Add Product List LocalStorage
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(Product));
  }, [Product]);

  // Delete Product List
  function edite(id) {
    const filterProduct = Product.filter((product) => {
      return product.productId !== id;
    });
    setProduct(filterProduct);
  }

  return (
    <div className="container">
      <div>
        {/*-----------------------------Form---------------------  */}
        <form onSubmit={handleSubmit}>
          <label htmlFor=""> Product Name:</label>
          <input
            value={elementsObj.productName}
            autoFocus
            type="text"
            name="productName"
            required
          />
          <br />
          <label htmlFor="">Product Id:</label>
          <input
            required
            value={elementsObj.productId}
            type="number"
            name="productId"
          />
          <br />
          Price:
          <input
            required
            value={elementsObj.price}
            type="number"
            name="price"
          />
          <br />
          Quantity:
          <input
            required
            value={elementsObj.quantity}
            type="number"
            name="quantity"
          />
          <br />
          Description:
          <br />
          <textarea name="description" id="" cols="30" rows="4"></textarea>
          <br />
          Choose a Color:
          <br />
          <select required name="color">
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
      {/*--------------------------  Table---------------------  */}

      {Product.length < 1 ? (
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
              <th>Description</th>
              <th>Delete</th>
            </tr>
            {/*--------------------------  Table Raw---------------------  */}
            {Product.map((item) => (
              <ProductTable key={item.productId} item={item} edite={edite} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FromData;
