import '../../styles/CallToAction.scss';
import imageSection from '../../icons_assets/restauranfood.jpg';

const CallToAction = () => {
    return (
        <>
            <section className='call-section'>
                <div className='info'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Medierranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <button>Reserve a table</button>
                </div>
                <div className='image'>
                    <img src={imageSection} alt='table little lemon' />
                </div>
            </section>
        </>
    )
}

export default CallToAction;