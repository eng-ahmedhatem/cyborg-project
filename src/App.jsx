import React from "react"
import { Header , Main , Footer} from "./Sections/index"
import { Home } from "./Pages/index"
let App = ()=>{
    return(
        <>
        <Header/>
        <Main>
            <Home/>
        </Main>
        <Footer/>  
        </>
    )
}
export default App