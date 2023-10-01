import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Recommendations from "./Pages/Recommendations"
import Search from "./Pages/Search"

function Router() {
    return (
        <div className="router">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Recommendations" element={<Recommendations />} />
                <Route path="search" element={<Search />} />
            </Routes>
        </div>
    )
}

export default Router