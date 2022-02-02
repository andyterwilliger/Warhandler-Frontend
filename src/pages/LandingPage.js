
import { Link } from 'react-router-dom'



function LandingPage() {
    return (
        <div className='LandingPage'>
        
        
            <h1>THE DARK MILLENNIUM</h1>
            <h2>FIGHT FOR THE FUTURE OF HUMANITY ACROSS A VICIOUS, WAR-TORN GALAXY</h2>
            <p> Warhammer 40,000 puts you in command of an army of mighty warriors and war machines as you battle for supremacy in the grim darkness of the far future. 
                In each game you deploy your forces against those of your opponent and strive to achieve victory in your chosen mission. 
                Each of you will take it in turns to manoeuvre your units, fire upon the enemy lines and charge into combat, claiming contested ground and driving your foe from the battlefield. 
                To emerge triumphant will require cunning, bravado and the luck of the dice, and through your conquests you can spread hope across the stars or set the galaxy aflame.
                </p>

            <h5>IN THE GRIM DARKNESS OF THE FAR FUTURE THERE IS ONLY WAR</h5>
        <Link to='/'>
        <button>Click to Enter</button>
        </Link>
       
       
        </div>
    )
}
export default LandingPage;