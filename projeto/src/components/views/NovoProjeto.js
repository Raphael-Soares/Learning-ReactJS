import {useNavigate} from "react-router-dom";

import ProjetoForm from "../projeto/ProjectForm";
import styles from "./NovoProjeto.module.css";

function NovoProject() {
    const history = useNavigate();
    function createPost(project) {
        //initialize costs service
        project.costs = 0;
        project.services = [];

        fetch("http://localhost:5000/Projects", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }
    return (
        <div className={styles.novo_projeto_container}>
            <h2>Criar Projeto</h2>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar novo Projeto" />
        </div>
    );
}

export default NovoProject;
