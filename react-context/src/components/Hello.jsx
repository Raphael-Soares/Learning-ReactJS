import {useContext} from "react";
import {CustomerContext} from "../context/customer";

function Hello() {
    const {name} = useContext(CustomerContext);

    return (
        <>
            <h1>{`Olá ${name}`}</h1>
        </>
    );
}

export default Hello;
