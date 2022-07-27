import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layouts/LinkButton";

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Começe a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/projeto" text="Criar projeto" />
            <img src={savings}></img>
        </section>
    );
}

export default Home;
