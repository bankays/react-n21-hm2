import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // console.log(data);
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const data = useSelector((state) => state.login.email);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(product);
  const handlike = (prod) => {
    console.log(prod);
    dispatch({ type: "LIKE_PRODUCT", prod });
  };
  const handlike2 = (prod) => {
    console.log(prod);
    dispatch({ type: "ADD_CART", prod });
  };

  return (
    <div className="home">
      {/* <h2>{data ? "hello" + data : "hello"}</h2> */}
      {product.map((prod) => (
        <div className="card" key={prod.id}>
          <img className="image" src={prod.images[0]} alt="" />
          <h2>{prod.title}</h2>
          <button className="like" onClick={() => handlike(prod)}>
            like
          </button>
          <button className="add" onClick={() => handlike2(prod)}>
            add cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
