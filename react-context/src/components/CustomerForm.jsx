import {useState, useContext} from "react";
import {CustomerContext} from "../context/customer";
import "../style.css";

function CustomerForm() {
    const {submit} = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        submit({name, email});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default CustomerForm;
