import React from "react";
import { useSelector } from "react-redux";

const Like = () => {
  const data = useSelector((state) => state.like.likedpr);
  console.log(data);
  return (
    <div className="home">
      {data.map((likedpr, index) => (
        <div className="card" key={index}>
          <img className="image" src={likedpr.images[0]} alt="" />
          <h2>{likedpr.title}</h2>
          <button className="like"> liked</button>
        </div>
      ))}
    </div>
  );
};

export default Like;
