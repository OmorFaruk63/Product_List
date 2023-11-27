import "./ProductTable.css";
import { MdDelete } from "react-icons/md";

const ProductTable = (item) => {
  const { productName, productId, price, quantity, color,description } = item.item;
console.log(item.item);


  return (
    <tr>
      <td>{productName}</td>
      <td>{productId}</td>
      <td>{price} Taka</td>
      <td> {quantity} kg</td>
      <td>{color}</td>
      <td>{description}</td>
      <td>
        <span onClick={() => item.edite(productId)}>
          <MdDelete />
        </span>
      </td>
    </tr>
  );
};

export default ProductTable;
