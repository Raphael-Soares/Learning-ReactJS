import styles from "./ProjetoForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
function ProjetoForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" placeholder="Insira o nome do projeto" name="name" text="Nome do projeto" />

            <Input type="number" placeholder="Insira um orçamento para o projeto" name="orcamento" text="Orcamento do projeto" />

            <Select name="category_id" text="Selecione uma categoria" />
            <SubmitButton text={btnText} />
        </form>
    );
}
export default ProjetoForm;
