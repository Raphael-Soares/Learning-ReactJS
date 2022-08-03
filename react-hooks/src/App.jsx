import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseState";
import UseRef from "./hooks/UseRef";
import UseReducer from "./hooks/UseReducer";
import UseReducerTwo from "./hooks/UseReducerTwo";

function App() {
    return (
        <div>
            <UseStateHook />

            <UseEffectHook />

            <UseRef />

            <UseReducer />

            <UseReducerTwo />
        </div>
    );
}

export default App;
