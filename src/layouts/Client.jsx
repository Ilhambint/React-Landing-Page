import '../style/Client.css'
import Client1 from "../assets/client1.png"
import Client2 from "../assets/client2.png"
import Client3 from "../assets/client3.png"
import Client4 from "../assets/client4.png"
import Client5 from "../assets/client5.png"
import Client6 from "../assets/client6.png"
import Client7 from "../assets/client7.png"


function Client () {
    return(
        <>
        <div className="containerClient">
            
        <div className="head">
                <h2>Our Clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className="clientLogo">
                <img src={Client1} alt="" />
                <img src={Client2} alt="" />
                <img src={Client3} alt="" />
                <img src={Client4} alt="" />
                <img src={Client5} alt="" />
                <img src={Client6} alt="" />
                <img src={Client7} alt="" />
            </div>
        </div>

        </>
    )
}

export default Client