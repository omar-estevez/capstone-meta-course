import BookingPage from "./main components/BookingPage";
import Homepage from "./main components/Homepage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from "./APIs/BookingsAPI";
import ConfirmedBooking from "./main components/ConfirmedBooking";

const Main = () => {

    let data = '';

    const navigate = useNavigate();

    const updateTimes = (date) => {
        return fetchAPI(date);
    }

    const submitForm = (formData) => {
        console.log (formData);
        data = formData;
        const submit = submitAPI(formData);
        if(submit) navigate("/confirmation-booking");
    }

    useEffect(() => {
        console.log('algo')
    }, [data]);

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm}/>} />
                <Route path="/confirmation-booking" element={<ConfirmedBooking formData={data} />} />
            </Routes>
        </>
    )
}

export default Main;