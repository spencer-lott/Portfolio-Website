import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Projects } from "../components/projects/Projects"

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
            </Route>
        </Routes>
    </>
    )

}