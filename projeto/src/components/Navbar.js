import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav>
                Navbar
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
