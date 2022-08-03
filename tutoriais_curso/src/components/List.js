import Item from "./Item";
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Pegeout" ano_lancamento={2018}></Item>
                <Item></Item>
            </ul>
        </>
    );
}

export default List;
