import '../style/Community.css'
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'




function Community () {
    return(
        
        <div className="containerCom">
            <div className="teksCom">
                <h2>
                Manage your entire community in a single system
                </h2>

                <p>Who is Nextcent suitable for?
                </p>
            </div>

            <div className="infoCom">
                <div className="memberCom">
                    <img src={Icon1} alt="" />
                    <h2>Membership Organisations</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="memberNat">
                    <img src={Icon2} alt="" />
                    <h2>National Associations</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="memberClub">
                    <img src={Icon3} alt="" />
                    <h2>Clubs And Groups</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    
    )
}

export default Community