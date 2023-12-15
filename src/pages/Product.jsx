import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.add.add);
  console.log(data);
  const handledelete = (add) => {
    dispatch({ type: "REMOVE_CART", add });
  };
  const handledelete2 = (add) => {
    dispatch({ type: "REMOVE_ONE", add });
  };
  return (
    <div className="home">
      {data.map((add, index) => (
        <div className="card" key={index}>
          <img className="image" src={add.images[0]} alt="" />
          <h2>{add.title}</h2>
          <button className="delete" onClick={() => handledelete2(add)}>
            delete one
          </button>
          <button className="delete-All" onClick={() => handledelete(add)}>
            Delete All
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
