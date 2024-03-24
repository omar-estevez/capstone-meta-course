import '../../styles/Specials.scss';
import { MdDeliveryDining } from "react-icons/md";
import cardOne from '../../icons_assets/greek salad.jpg';
import cardTwo from '../../icons_assets/bruchetta.png';
import cardThree from '../../icons_assets/lemon dessert.jpg';

const Specials = () => {

    const cards = [{
        'image': cardOne,
        'name': 'Greek Salad',
        'price' : '$12.99',
        'description': 'This famous greek salad of cryspy lettuce, peppers, olives and our chicago style feta cheese, granished with counchy garlys and rosemary.',
    },
    {
        'image': cardTwo,
        'name': 'Brucheta',
        'price' : '$5.99',
        'description': 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seassoned with salt and olive oil.',
    },
    {
        'image': cardThree,
        'name': 'Lemon Dessert',
        'price' : '$6.99',
        'description': 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    }]

    return (
        <>
            <section className='specials-section'>
                <div className='title'>
                    <h1>This weeks Specials</h1>
                    <div className='btn'>
                        <button>Online Menu</button>
                    </div>
                </div>
                <div className='card-container'>
                    {
                        cards.map((card, index) => 
                            <div key={index} className='cards'>
                                <img src={card.image} alt={card.name}/>
                                <div><h3>{card.name} <span>{card.price}</span></h3></div>
                                <p>{card.description}</p>
                                <h4>Order a delivery <span><MdDeliveryDining /></span></h4>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Specials;