import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../img/costs_logo.png";
import Container from "./Container";
function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Keep" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projetos">Projetos</Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/empresa">Empresa</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </div>
    );
}

export default Navbar;
