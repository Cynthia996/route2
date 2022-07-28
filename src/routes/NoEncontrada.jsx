import { Link } from "react-router-dom";
import '../css/App.css';

const NoEncontrada = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p> Not Found</p>
            <Link to="/" className="btn btn-outline-dark">
                Inicio
            </Link>
        </div>
    );
};

export default NoEncontrada;
