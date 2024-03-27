import '../../styles/BookingConfirmation.scss';
import imageLittleLemon from '../../icons_assets/Logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const ConfirmedBooking = ({ formData }) => {

    const navigate = useNavigate();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (formData) {
                console.log('Form data exists');
            } else {
                console.log('Form data does not exist');
                navigate('/');
            }
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [formData]);

    return (
        <>
            <div className="card_container">
                <div className="card">
                <h1>Reserve Confirmation</h1>
                    <h3>Name: <span>{formData && formData['Name']}</span></h3>
                    <h3>Number of guests: <span>{formData && formData['Number_guest']} person(s)</span></h3>
                    <h3>Date: <span>{formData && formData['Date']} at {formData && formData['Time']}</span></h3>
                    <h3>Occasion: <span>{formData && formData['Occassion']}</span></h3>
                    <p>Remember to arrive 15 minutes in advance</p>
                    <div className='background'>
                        <span>.</span>
                    <img src={imageLittleLemon} alt='Logo Little Lemon'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmedBooking;