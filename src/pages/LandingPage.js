
import { Link } from 'react-router-dom';




function LandingPage(props) {
    return (
        <div className='LandingPage'>
        
            <h1>WarHandler</h1>
            <h2>FIGHT FOR THE FUTURE OF HUMANITY ACROSS A VICIOUS, WAR-TORN GALAXY</h2>
            <h5>IN THE GRIM DARKNESS OF THE FAR FUTURE THERE IS ONLY WAR</h5>
        <Link to='/'>
        <button>Click to Enter</button>
        </Link>
       
       
        </div>
    )
}
export default LandingPage;