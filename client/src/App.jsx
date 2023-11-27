import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as shiftService from "./shiftServidce/shiftSerices"

import { Navigation } from "./Components/Navigation";
import { Home } from "./Components/Home";

function App() {
    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        shiftService.GetAll().then((result) => setShifts(result))
    }, []);
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/home" element={<Home shifts={shifts}/>} />
            </Routes>
        </>
    );
}
export default App;
