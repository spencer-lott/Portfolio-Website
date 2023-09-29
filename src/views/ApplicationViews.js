import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Projects } from "../components/projects/Projects"
import { About } from "../components/about/About"

export const ApplicationViews = () => {
    return(
        <>
        <Routes>

            <Route path="/" element={ 

                <>
                
                    <Outlet />
                </>
            }>
                <Route path="/" element={ <Home /> } />
                <Route path="/projects" element={ <Projects />} />
                <Route path="/about" element={ <About />} />
            </Route>
        </Routes>
    </>
    )

}