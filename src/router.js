import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'

import Home from "./Pages/Home"
import Recommendations from "./Pages/Recommendations"
import Search from "./Pages/Search"
import Error from "./Pages/Error"

import Navbar from "./Components/Navbar"

function Router() {
    const user = useSelector((state) => state.user);

    return (
        <div className="router">
            <Navbar />
            <Routes>
                <Route path="/" element={user ? <Search /> : <Home />} />
                <Route path="Recommendations" element={user ? <Recommendations /> : <Error />} />
            </Routes>
        </div>
    )
}

export default Router