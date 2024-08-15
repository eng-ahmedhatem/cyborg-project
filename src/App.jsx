import React from "react"
import { Header , Main , Footer} from "./Sections/index"
import { Home , Browse} from "./Pages/index"
import { BrowserRouter , Routes ,Route } from "react-router-dom"
let App = ()=>{
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/browse" element={<Browse/>}/>
                </Routes>
            </Main>
            <Footer/>  
        </BrowserRouter>
        </>
    )
}
export default App