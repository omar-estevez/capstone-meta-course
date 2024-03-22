import BookingPage from "./main components/BookingPage";
import Homepage from "./main components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/booking" element={<BookingPage/>}/>
            </Routes>
        </>
    )
}

export default Main;