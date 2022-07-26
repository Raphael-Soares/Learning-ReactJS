import {useState} from "react";
import Saudacao from "./Saudacao";
import SeuNome from "./SeuNome";

function StateLift() {
    const [nome, setNome] = useState();
    return (
        <div className="App">
            <h1>State Lift</h1>
            <SeuNome setNome={setNome} />
            <Saudacao nome={nome} />
        </div>
    );
}

export default StateLift;
