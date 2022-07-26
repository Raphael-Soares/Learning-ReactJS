function Pessoa({nome,foto}){
    return(
        <div>
            <img src= {foto} alt="" srcset=""></img>
            <h2>Olá, {nome}</h2>

        </div>
    )

}

export default Pessoa