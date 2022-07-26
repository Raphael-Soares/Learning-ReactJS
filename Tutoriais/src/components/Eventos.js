import Button from "./Button";

function Eventos() {
    function meuEvento() {
        console.log("Opa, fui ativado!");
    }
    function segundoEvento() {
        console.log("Epa, também fui ativado!");
    }
    return (
        <div className="App">
            <h1>Eventos</h1>
            <Button text="Primeiro evento" event={meuEvento} />
            <Button text="Segundo evento" event={segundoEvento} />
        </div>
    );
}
export default Eventos;
