import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/empresa" element={<Empresa />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
