import { Routes, Route } from "react-router-dom"

import Bears from "./pages/Bears"
import Marcio from "./pages/Marcio"

function Router (){
    return(
        <Routes>
            <Route path="/marcio" element={<Marcio />}></Route>
            <Route path="/bears" element={<Bears />}></Route>
        </Routes>

    )
}

export default Router