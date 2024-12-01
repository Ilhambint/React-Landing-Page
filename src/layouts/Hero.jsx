import '../style/Hero.css'
import heroImg from '../assets/hero-img.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Hero () {
    return (
        <div className="hero">
                        <div className="teksHero">
                            <h1>
                                <span className='hBlack'>Lessons and insights </span>
                                <span className='hgreen'>from 8 years</span>
                                </h1>
                            <p>Where to grow your business as a photographer: site or social media?</p>
                            <button type="button" className="btn">Register</button>
                            </div>

                        <div className="hero-img">
                            <img src={heroImg} alt="" />
                        </div>
                </div>
    )
}

export default Hero