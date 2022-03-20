import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import book from "../Book.png";
import { useDataContext } from "../dataContext";
const ProductListing = () => {
  const { AppData, SetAppData } = useDataContext();

  const [data, setData] = useState();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setData(json));
    fetch("/api/user/cart", {
      method: "GET",
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    }).then((res) => console.log(res, 66));
  }, []);
  const [filter, setFilter] = useState("All");
  const addToCart = (id) => {
    if (!encodedToken) {
      alert("Token not available");
      navigate("/signup");

      fetch(`/api/user/cart/${id}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },

        method: "POST",
      }).then((res) => console.log(res, 33));
    }
    SetAppData({ ...AppData, cart: [...AppData.cart, id] });
  };
  return (
    <>
      {" "}
      <h1>Book Store</h1>
      <h3>Cart {AppData.cart.length}</h3>
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("non-fiction")}>Non-Fiction</button>
        <button onClick={() => setFilter("horror")}>Horror</button>
        <button onClick={() => setFilter("fiction")}>Fiction</button>
      </div>
      <div className="products">
        {console.log(data, 13)}
        {data?.products?.map(
          ({ author, categoryName, id, price, title, _id }) => {
            return (
              <>
                {(filter == "All" || filter == categoryName) && (
                  <div className="product" id={id}>
                    <img src={book} />
                    <h3>{title}</h3>
                    <p className="author"> Author : {author}</p>
                    {/* <span className="category">{categoryName}</span> */}
                    <p className="price"> ₹ {price}</p>
                    <button onClick={() => addToCart(_id)}>Add to cart</button>
                  </div>
                )}
              </>
            );
          }
        )}
      </div>
    </>
  );
};

export default ProductListing;
