//Imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Componentes
import Navbar from "./components/Navbar";

//Layouts

import Container from "./layouts/Container";

//Views
import Home from "./views/Home";
import Contato from "./views/Contato";
import Empresa from "./views/Empresa";
import NovoProjeto from "./views/NovoProjeto";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Container customClass="min-height">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/contato" element={<Contato />}></Route>
                        <Route path="/empresa" element={<Empresa />}></Route>
                        <Route path="projeto" element={<NovoProjeto />}></Route>
                    </Routes>
                </Container>
                <p>Footer</p>
            </Router>
        </div>
    );
}

export default App;
