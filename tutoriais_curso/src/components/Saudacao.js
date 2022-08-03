function Saudacao({nome}) {
    return <h1>Olá, {nome}!</h1>;
}
Saudacao.defaultProps = {
    nome: "Anônimo",
};
export default Saudacao;
