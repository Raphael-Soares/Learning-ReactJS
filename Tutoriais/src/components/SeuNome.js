function SeuNome({setNome}) {
    return (
        <div>
            <input placeholder="Qual o seu nome?" onChange={(e) => setNome(e.target.value)} />
        </div>
    );
}

export default SeuNome;
