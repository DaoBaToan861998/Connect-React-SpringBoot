import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListProduct />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/edit/:id" element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
