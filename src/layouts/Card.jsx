import '../style/Card.css'
import CardImg1 from '../assets/card1.png'
import CardImg2 from '../assets/card2.png'
import CardImg3 from '../assets/card3.png'

function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>
                        Caring is the new marketing
                    </h1>

                    <p>
                        The Nexcent blog is the best place to read about the latest membership insights,
                        trends and more. See whos joining the community, read about how our community
                        are increasing their membership income and lots more.
                    </p>

                    <div className="card">
                        <div className="card1">
                            <div className="cardImg">
                                <img src={CardImg1} alt="" />
                            </div>

                            <div className="cardTeks">
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>

                                <button type='button' className='btn'>Readmore</button>
                            </div>
                        </div>

                        <div className="card2">
                            <div className="cardImg">
                                <img src={CardImg2} alt="" />
                            </div>

                            <div className="cardTeks">
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>

                                <button type='button' className='btn'>Readmore</button>
                            </div>
                        </div>

                        <div className="card3">
                            <div className="cardImg">
                                <img src={CardImg3} alt="" />
                            </div>

                            <div className="cardTeks">
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>

                                <button type='button' className='btn'>Readmore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card