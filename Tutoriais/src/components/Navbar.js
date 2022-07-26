import {Link} from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li>
                <Link to="/contato">Contatos</Link>
            </li>
        </ul>
    );
}
export default Navbar;
