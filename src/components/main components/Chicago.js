import '../../styles/Chicago.scss';
import imageSectionOne from '../../icons_assets/Mario and Adrian A.jpg';
import imageSectionTwo from '../../icons_assets/Mario and Adrian b.jpg';

const Chicago = () => {
    return (
        <>
            <section className='chicago-section'>
                <div className='info'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Medierranean restaurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <div className='img-container'>
                    <img src={imageSectionOne} alt='table little lemon' className='img1'/>
                    <img src={imageSectionTwo} alt='table little lemon' className='img2'/>
                </div>
            </section>
        </>
    )
}

export default Chicago;