import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../css/App.css';

function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/productos`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const setData = (id, producto, marca, proveedor, precio) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.getItem("producto", producto);
    localStorage.getItem("marca", marca);
    localStorage.getItem("proveedor", proveedor);
    localStorage.getItem("precio", precio);
  };

  return (
    <>
      <div className="tableBox">
        <Navbar />
        <h1> Editar Productos</h1>
        <table>
          <thead className="thead-class">
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Marca</th>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Modificar</th>
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
                  <td>
                    <Link to="/actualizar">
                      <button
                        type="button"
                        onClick={() =>
                          setData(
                            data.id,
                            data.producto,
                            data.marca,
                            data.poveedor,
                            data.precio
                          )
                        }
                        className="update"
                      >
                        Modificar
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="contentBox">
        <div className="formBox">
          <form></form>
        </div>
      </div>
    </>
  );
}

export default Read;
