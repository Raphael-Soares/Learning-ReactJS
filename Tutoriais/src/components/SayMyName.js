import styles from "./SayMyName.module.css"
function SayMyName(props){
    const name = props.name

    return (
        <div >
            <p className={styles.Hello}>
                Olá, {name} 
            </p>
        </div>
    )

}

export default SayMyName