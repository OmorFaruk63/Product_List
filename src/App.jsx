import "./App.css";
import FormData from "./components/FormData";

function App() {
  return (
    <div>
      <h1>Product List</h1>
      <FormData />
    </div>
  );
}

export default App;

// - Create a FormData components, the form contains input fields like Product Name, Product Id, Price, Quantity, Description, a select menu that contains three colors as options like "red","blue","green".

// - There should be another component called ProductTable that contain the ProductRow component.

// - ProductRow contains the info of products in a table row data.

// - Integrate user interactions to add, delete and data should be stored in local-storage.
