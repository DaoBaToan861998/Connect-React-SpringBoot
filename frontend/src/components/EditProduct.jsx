import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    price: "",
  });

  const { name, price } = formInput;

  const { id } = useParams();

  const loadProduct = async () => {
    let results = await axios.get(
      `http://localhost:8080/product/findProduct/${id}`
    );
    setFormInput(results.data);
  };
  useEffect(() => {
    loadProduct();
  }, []);

  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/product/update/${id}`, formInput);
    navigate("/");
  };
  return (
    <div>
      <h1>Edit Product</h1>

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

export default EditProduct;
