import '../../styles/CustomerSays.scss';
import cardOne from '../../icons_assets/profile pic/stefan.jpg';
import cardTwo from '../../icons_assets/profile pic/andrea.jpg';
import cardThree from '../../icons_assets/profile pic/carl.jpg';
import cardFour from '../../icons_assets/profile pic/Bob.jpg';

const CustomersSay = () => {

    const cards = [{
        'image': cardOne,
        'name': 'Stefan',
        'review': 'This famous greek salad...',
    },
    {
        'image': cardTwo,
        'name': 'Andrea',
        'review': 'This famous greek salad...',
    },
    {
        'image': cardThree,
        'name': 'Carl',
        'review': 'This famous greek salad...',
    },
    {
        'image': cardFour,
        'name': 'Bob',
        'review': 'This famous greek salad...',
    }]


    return (
        <>
            <section className='customer-section'>
                <div className='title'>
                    <h1>This weeks Specials</h1>
                </div>
                <div className='card-container'>
                    {
                        cards.map((card, index) => 
                            <div key={index} className='cards'>
                                <h3>Rating</h3>
                                <div className='img-container'>
                                    <img src={card.image} alt={card.name}/>
                                    <h4>{card.name}</h4>
                                </div>
                                <p>{card.review}</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default CustomersSay;