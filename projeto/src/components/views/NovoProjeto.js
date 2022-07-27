import ProjetoForm from "../projeto/ProjetoForm";
import styles from "./NovoProjeto.module.css";

function NovoProject() {
    return (
        <div className={styles.novo_projeto_container}>
            <h2>Criar Projeto</h2>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjetoForm btnText="Criar novo Projeto" />
        </div>
    );
}

export default NovoProject;
