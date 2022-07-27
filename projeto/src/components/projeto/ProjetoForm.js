function ProjetoForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"></input>
            </div>
            <div>
                <input type="number" placeholder="Insira um orçamento total"></input>
            </div>
            <div>
                <select name="categoria_id">
                    <option disabled selected>
                        Selecione a categoria
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto"></input>
            </div>
        </form>
    );
}
export default ProjetoForm;
