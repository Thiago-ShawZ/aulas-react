import { Link } from "react-router-dom"

function Bears (){
    return(
        <div>
        <h1>Melhor sala</h1>
        <Link to={"/marcio"}>Dentro do Márcio</Link>
        </div>
    )
}

export default Bears