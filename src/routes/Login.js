import React, { useState } from "react";
import Home from "./Inicio";
import '../css/App.css';

const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();

    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("Complete Los Datos Faltantes!!");
    } else {
      if (usu === "admin" && pas === "admin") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div>
      <form id="form_login" style={{marginTop: -400, padding: 500, }}>
        <div>
          <h1 style={{ color: "blue", textalign: "center", }}>INICIAR SESION</h1>
          <label htmlFor="txtusu">
            <strong>USUARIO</strong>
          </label>
          <input
            type="text"
            id="txtusu"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={(e) => setUsu(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="txtpas">
            <strong>CONTRASEÑA</strong>
          </label>
          <input
            type="password"
            id="txtpas"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={(e) => setPas(e.target.value)}
            required
          />
        </div>
        <br />

        <input
          type="submit"
          className="btn btn-primary"
          value="Ingresar"
          onClick={iniciarSesion}
        />
      </form>

      {miLogin === "true" && <Home usu={usu} />}
    </div>
  );
};

export default Login;
