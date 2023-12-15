import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
    
  const dispatch = useDispatch();
  let email = "aziz@gmail.com";
  const handlesave = () => {
    dispatch({ type: "SaveEmail", email });
  };
  return (
    <div>
      <button onClick={handlesave}>clisck</button>
    </div>
  );
};

export default Login;
