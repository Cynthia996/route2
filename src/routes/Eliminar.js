import React, { useEffect, useState } from "react";
// import {Table } from 'reactstrap'
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../css/App.css';

function Delete() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/productos`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3000/productos`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/productos/${id}`).then(() => {
      getData();
    });
  };

  return (
    <>
      <Navbar/>
      <div className="tableBox">
        <h1> Borrar Productos</h1>
        <table>
          <thead className="thead-class">
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Marca</th>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {apiData.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.producto}</td>
                  <td>{data.marca}</td>
                  <td>{data.aroma}</td>
                  <td>{data.precio}</td>

                  <td>
                    <Link to="/eliminar">
                      <button
                        type="button"
                        onClick={() => onDelete(data.id)}
                        className="delete"
                      >
                        Borrar
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Delete;
