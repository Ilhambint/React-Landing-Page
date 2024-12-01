import '../style/Customer.css'
import logoCus from '../assets/Tesla.png'
import Community from '../assets/Community.png'
import Community2 from '../assets/Community2.png'
import Community3 from '../assets/Community3.png'
import Community4 from '../assets/Community4.png'
import Community5 from '../assets/Community5.png'
import Community6 from '../assets/Community6.png'
import panah from '../assets/panah.png'


function Customer () {
    return(
        <div className='containerCus'>
            <img src={logoCus} alt="" />
            <div className='teksCus'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

                <h3>Tim Smith</h3>
                <p className='dragon'>British Dragon Boat Racing Association</p>

                <div className="cust">
                    <img src={Community} alt="" />
                    <img src={Community2} alt="" />
                    <img src={Community3} alt="" />
                    <img src={Community4} alt="" />
                    <img src={Community5} alt="" />
                    <img src={Community6} alt="" />

                    <button type='button' className='btn'>Meet all customers  
                        <img src={panah} alt="" />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Customer