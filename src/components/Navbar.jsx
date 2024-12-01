import LogoNavbar from "../assets/Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Navbar.css'

function Navbar() {
    return (
            < nav > 
                <div className="container">
                    <div className="logo">
                     <img src={LogoNavbar} alt=""/>
                 </div>

            <div className="menu">
                <ul>
                    <li className="home">Home</li>
                    <li className="service">Service</li>
                    <li className="feature">Feature</li>
                    <li className="product">Product</li>
                    <li className="faq">FAQ</li>
                </ul>
            </div>

            <div className="button-login">
                <button type="button" className="btn btn-light">Success</button>
                <button type="button" className="btn btn-secondary">Sign up</button>
            </div>
        </div>
    </nav>

    )
}

export default Navbar