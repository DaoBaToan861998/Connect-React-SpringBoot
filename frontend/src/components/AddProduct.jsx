import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    price: "",
  });

  const { name, price } = formInput;

  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/product/add", formInput);
    navigate("/");
  };

  return (
    <div>
      <h1>Add Product</h1>

      <div className="mx-auto shadow p-5 w-75">
        <span onClick={() => navigate(-1)}>Back</span>
        <h2>Add User</h2>
        <form onSubmit={handleSubmitForm}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <br />
          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChangeInput}
          />
          <br />
          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
