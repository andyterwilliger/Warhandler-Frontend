
import { Link } from 'react-router-dom';




function LandingPage(props) {
    return (
        <div className='LandingPage'>
        <div id= "landing-h1">
            <h1>WarHandler</h1> <br/>
           </div>
            <div id='landing-h2'>
            <h2>IN THE GRIM DARKNESS OF THE FAR FUTURE THERE IS ONLY WAR</h2>

            </div>
        <Link to='/'>
            <div id ='landing-button'>
        <button>Enter</button>
        </div>
        </Link>
       
       
        </div>
    )
}
export default LandingPage;