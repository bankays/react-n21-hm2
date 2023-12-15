import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Nav from "./pages/Nav";
import Login from "./pages/Login";
import Like from "./pages/Like";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="log" element={<Login />} />
        <Route path="like" element={<Like />} />
      </Routes>
    </>
  );
}

export default App;
