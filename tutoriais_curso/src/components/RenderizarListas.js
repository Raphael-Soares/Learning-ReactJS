function RenderizarListas({lista}) {
    return (
        <div className="App">
            <h1>Renderizar Listas</h1>
            <ul>{lista.length > 0 ? lista.map((item, index) => <li key={index}>{item}</li>) : <p>Não há itens na lista</p>}</ul>
        </div>
    );
}

export default RenderizarListas;
