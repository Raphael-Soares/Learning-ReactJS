//Imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Componentes
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

//Layouts

import Container from "./components/layouts/Container";

//Views
import Home from "./components/views/Home";
import Contato from "./components/views/Contato";
import Empresa from "./components/views/Empresa";
import NovoProjeto from "./components/views/NovoProjeto";
import Projetos from "./components/views/Projetos";

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
                        <Route path="/projeto" element={<NovoProjeto />}></Route>
                        <Route path="/projetos" element={<Projetos />}></Route>
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
