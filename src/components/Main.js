import BookingPage from "./main components/BookingPage";
import Homepage from "./main components/Homepage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from "./APIs/BookingsAPI";
import ConfirmedBooking from "./main components/ConfirmedBooking";

const Main = () => {

    const navigate = useNavigate();

    const updateTimes = (date) => {
        return fetchAPI(date);
    }

    const submitForm = (formData) => {
        const submit = submitAPI(formData);
        if(submit) navigate("/confirmation-booking");
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    const [formData, setFormData] = useState(null);

    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} setFormData={setFormData}/>} />
                <Route path="/confirmation-booking" element={<ConfirmedBooking formData={formData}/>} />
            </Routes>
        </>
    )
}

export default Main;