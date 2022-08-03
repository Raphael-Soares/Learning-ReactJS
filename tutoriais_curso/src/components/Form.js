import {useState} from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(nome + " Cadastrado");
    }

    const [nome, setNome] = useState();
    return (
        <div className="App">
            <h1>Form</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}></input>
                <input type="password" placeholder="Senha"></input>
                <input type="submit" value="Cadastrar"></input>
            </form>
        </div>
    );
}

export default Form;
