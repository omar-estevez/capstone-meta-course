import '../../styles/CallToAction.scss';
import imageSection from '../../icons_assets/restauranfood.jpg';
import { useNavigate } from "react-router-dom";

const CallToAction = () => {

    const navigate = useNavigate();

    const goToReservation = () => {
        navigate("/booking");
    }

    return (
        <>
            <section className='call-section'>
                <div className='info'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Medierranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <button onClick={goToReservation}>Reserve a table</button>
                </div>
                <div className='image'>
                    <img src={imageSection} alt='table little lemon' />
                </div>
            </section>
        </>
    )
}

export default CallToAction;