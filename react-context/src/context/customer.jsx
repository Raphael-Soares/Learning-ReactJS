import {createContext, useState} from "react";

export const CustomerContext = createContext();

export function CustomerProvider({children}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleOnSubit({name, email}) {
        console.log(`Name: ${name} Email: ${email}`);
        setName(name);
        setEmail(email);
    }

    return <CustomerContext.Provider value={{name, email, submit: handleOnSubit}}>{children}</CustomerContext.Provider>;
}
