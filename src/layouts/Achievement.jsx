import Member from '../assets/member.png'
import Clubs from '../assets/clubs.png'
import Event from '../assets/Event.png'
import Payment from '../assets/Payment.png'
import '../style/Achievement.css'

function Achievement () {
    return (
        <div className="containerAch">
            <div className="headingAch">
                <h2>
                    <span className="hBlack">Helping a local </span>
                    <span className="hGreen">business reinvent itself</span>
                </h2>

                <p>We reached here with our hard work and dedication</p>
            </div>

            <div className="count">
                <div className="member">
                    <img src={Member} alt="" />
                    <div>
                    <h1>2,245,341</h1>
                    <p>Members</p>
                    </div>
                </div>

                <div className="club">
                    <img src={Clubs} alt="" />
                    <div>
                    <h1>46,328</h1>
                    <p>Clubs</p>
                    </div>
                </div>

                <div className="booking">
                    <img src={Event} alt="" />
                    <div><h1>828,867</h1>
                    <p>Event Bookings</p>
                    </div>
                </div>

                <div className="payment">
                    <img src={Payment} alt="" />
                    <div>
                    <h1>1,926,436</h1>
                    <p>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement