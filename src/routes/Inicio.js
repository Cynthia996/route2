import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import '../css/App.css';


function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/productos`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  return (
    <>
      <div className="tableBox">
        <Navbar/>
        <h1> Lista de Productos en Stock</h1>
        <table>
          <thead className="thead-class">
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Marca</th>
              <th>Proveedor</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {apiData.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.producto}</td>
                  <td>{data.marca}</td>
                  <td>{data.proveedor}</td>
                  <td>{data.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
