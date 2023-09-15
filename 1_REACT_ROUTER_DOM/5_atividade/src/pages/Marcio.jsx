import { Link } from "react-router-dom"

function Marcio (){
    return(
        <div>
        <h1>Conselheiro que não da conselho</h1>
        <Link to={"/bears"}>Ir pra melhor sala</Link>
        </div>
    )
}

export default Marcio