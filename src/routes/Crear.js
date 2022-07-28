import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import '../css/App.css';

function Create() {
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [precio, setPrecio] = useState("");



  const sendDataToAPI = () => {
    axios
      .post(`http://localhost:3000/productos`, {
        producto,
        marca,
        proveedor,
        precio,
      })

      .then(() => {})
      .catch((err) => console.log(err));

    console.warn(producto, marca, proveedor, precio);
    console.log(producto);
    console.log(marca);
    console.log(proveedor);
    console.log(precio);
  };

  return (
    <>
    <Navbar/>
    <div className="contentBox">

      <div className="formBox">
        <h1> Ingresar un nuevo producto</h1>

        <form>
          <div className="inputBox">
            <span> Producto </span>
            <input
              name="nombreproducto"
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ingresar producto"
            />
          </div>

          <div className="inputBox">
            <span> Marca </span>
            <input
              name="nombremarca"
              onChange={(e) => setMarca(e.target.value)}
              placeholder="Ingresar marca"
            />
          </div>

          <div className="inputBox">
            <span> Proveedor </span>
            <input
              name="nombrearoma"
              onChange={(e) => setProveedor(e.target.value)}
              placeholder="Ingresar aroma"
            />
          </div>

          <div className="inputBox">
            <span> Precio </span>
            <input
              name="nombreprecio"
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingresar precio"
            />
          </div>

          <div className="inputBox">
            <input type="button" value="Enviar" onClick={sendDataToAPI} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Create;
