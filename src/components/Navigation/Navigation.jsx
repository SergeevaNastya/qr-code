import { Link } from "react-router-dom";
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className="nav-container">
            <Link className="nav-link" to='/generate'>Генерировать QR</Link>
            <Link className="nav-link" to='/scan'>Сканировать QR</Link>
            <Link className="nav-link" to='/generateHistory'>История генерирования</Link>
            <Link className="nav-link" to='/scanHistory'>История сканирования</Link>
        </nav>
    );
};