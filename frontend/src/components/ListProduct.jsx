import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListProduct() {
  const [data, setData] = useState([]);

  const loadUsers = async () => {
    let url = "http://localhost:8080/product/list";
    let results = await axios.get(url);
    setData(results.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  // Delete
  const handleDeleteProduct=async(id)=>{
      await axios.delete(`http://localhost:8080/product/delete/${id}`)
      loadUsers()
  }
  return (
    <div>
      <h1>List Product</h1>

      <table className="table" style={{ width: "50%", margin: "40px auto" }}>
        <thead className="thead-dark table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">ProductName</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td scope="row">{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <Link to={`/edit/${e.id}`}>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </Link>
                <button type="button" className="btn btn-danger" onClick={()=>handleDeleteProduct(e.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={"/add"}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "800px", marginTop: "20px" }}
        >
          {" "}
          ADD
        </button>
      </Link>
    </div>
  );
}

export default ListProduct;
