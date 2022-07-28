import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/inicio">
          Lista de Productos
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/crear">
          Crear Producto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/editar">
          Editar Producto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/eliminar">
          Eliminar producto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
