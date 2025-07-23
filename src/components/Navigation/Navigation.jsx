import { Link } from "react-router-dom";
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className="nav-container">
            <Link className="nav-link" to='/qr-code/generate'>Генерировать QR</Link>
            <Link className="nav-link" to='/qr-code/generateHistory'>История генерирования</Link>
        </nav>
    );
};