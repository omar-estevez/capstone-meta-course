import '../../styles/BookingForm.scss';
import { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState('');
    const [guest, setGuest] = useState("");
    const [occasion, setOcassion] = useState("");
    const [formErrors, setFormErrors] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const getIsFormValid = () => {
        return name && date && time && guest && occasion;
    };

    const clearForm = () => {
        setName("");
        setDate("");
        setTime("");
        setGuest("");
        setOcassion("");
        setFormErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!name) errors.name = 'Name is required.';
        if (!date) errors.date = 'Date is required.';
        if (!time) errors.time = 'Time is required.';
        if (!guest) errors.guests = 'Number of guests is required.';
        if (!occasion) errors.occasion = 'Occasion is required.';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Handle form submission logic here
            const formData = createObject(e.target.elements);
            submitForm(formData);
            clearForm();
        }
    };

    const createObject = (data) => {
        return { 
            'Name' : data['name']['value'],
            'Date' : data['res-date']['value'],
            'Time' : data['res-time']['value'],
            'Number_guest' : data['guests']['value'],
            'Occassion' : data['occasion']['value']
        }
    }

    return (
        <>
            <div className='right-form'>
                <h1>Booking Form</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <fieldset>
                    <div className='Field'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" aria-label="On Click" value={name} onChange={(e) => setName(e.target.value)} required />
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" aria-label="On Click" value={date} onChange={(e) => setDate(e.target.value)} required />
                            {formErrors.date && <span className="error">{formErrors.date}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time" aria-label="On Click" onChange={(e) => setTime(e.target.value)} value={time} required>
                                <option value="">Select a time</option>
                                {availableTimes.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                            {formErrors.time && <span className="error">{formErrors.time}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests" aria-label="On Click" value={guest} onChange={(e) => setGuest(e.target.value)} required />
                            {formErrors.guests && <span className="error">{formErrors.guests}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" aria-label="On Click" value={occasion} onChange={(e) => setOcassion(e.target.value)} required>
                                <option></option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            {formErrors.occasion && <span className="error">{formErrors.occasion}</span>}
                        </div>
                        <button type="submit" disabled={!getIsFormValid()}>Make Your reservation</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default BookingForm;