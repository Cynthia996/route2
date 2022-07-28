import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../src/App"
import Crear from "./routes/Crear";
import Editar from "./routes/Editar";
import Eliminar from "./routes/Eliminar";
import Inicio from "./routes/Inicio";
import NoEncontrada from "./routes/NoEncontrada";
import Actualizar from "./routes/Actualizar";
import Login from "./routes/Login";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="inicio" element={<Inicio/>} />
        <Route path="crear" element={<Crear/>  } />
        <Route path="editar" element={<Editar/>} />
        <Route path="eliminar" element={<Eliminar />} />
        <Route path="actualizar" element={<Actualizar />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
