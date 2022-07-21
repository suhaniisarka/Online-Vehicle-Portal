import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BuyCar() {
  const sellerid = sessionStorage.getItem("id");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products?sellerid=" + sellerid)
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data.data);
        console.log(products);
      });
  }, []);

  const deleteProduct = (prodid) => {
    let resp = window.confirm("Are you sure to delete this product ?");
    if (resp) {
      axios
        .delete("http://localhost:4000/api/products/" + prodid)
        .then((resp) => {
          alert("Product deleted successfully");
          axios
            .get("http://localhost:4000/api/products?sellerid=" + sellerid)
            .then((resp) => {
              console.log(resp.data);
              setProducts(resp.data.data);
              console.log(products);
            });
        });
    }
  };

  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <div className="card shadow bg-transparent text-white">
        <div className="card-body">
          <h4 style={{ fontSize: "30px" }}>My Products</h4>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th style={{ border: "2px solid black" }}>
                  <a style={{ fontSize: "25px" }}>Name</a>
                </th>
                <th style={{ border: "2px solid black" }}>
                  <a style={{ fontSize: "25px" }}>Brand Name</a>
                </th>
                <th style={{ border: "2px solid black" }}>
                  <a style={{ fontSize: "25px" }}>Category</a>
                </th>
                <th style={{ border: "2px solid black" }}>
                  <a style={{ fontSize: "25px" }}>Price</a>
                </th>
                <th style={{ border: "2px solid black" }}>
                  <a style={{ fontSize: "25px" }}>Action</a>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x.prodid}>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <img
                      width="100"
                      src={"http://localhost:4000/" + x.photo}
                      className="img-thumnail"
                    />
                    <a
                      style={{
                        color: "white",
                        paddingLeft: "20px",
                        fontSize: "20px",
                      }}
                    >
                      {x.pname}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <a style={{ color: "white", fontSize: "20px" }}>{x.pcat}</a>
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <a style={{ color: "white", fontSize: "20px" }}>
                      {x.brand}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <a style={{ color: "white", fontSize: "20px" }}>
                      {x.price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </a>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="container center">
                      <button
                        onClick={() => deleteProduct(x.prodid)}
                        className="btn btn-danger btn-sm"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BuyCar;
