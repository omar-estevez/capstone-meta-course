import BookingForm from "./BookingForm";
import '../../styles/BookingContainer.scss';
import restaurantImage from '../../icons_assets/restaurant chef B.jpg'

const BookingPage = ({ availableTimes, updateTimes, submitForm, setFormData }) => {

    return (
        <>
        <div className="booking-container">
            <img src={restaurantImage} alt="Restaurant Chef"/>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} setFormData={setFormData}/>
        </div>
        </>
    )
}

export default BookingPage;