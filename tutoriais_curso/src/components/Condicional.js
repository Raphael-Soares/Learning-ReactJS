import {useState} from "react";

function Condicional() {
    const [numero, setNumero] = useState();
    return (
        <div className="App">
            <h1>Condicional</h1>

            <input type="text" placeholder="Digite um número" onChange={(e) => setNumero(e.target.value)} />

            {numero % 2 === 0 && <p>O número é par</p>}
        </div>
    );
}

export default Condicional;
