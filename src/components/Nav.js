import { Link } from 'react-router-dom';

function Nav(props) {
    return <nav className = 'nav'>
        <Link to ='/'>
            <div>Home</div>
            </Link>
            <Link to =''>
                <div>Make List</div>
            </Link>
            <Link>
                <div>Your Army</div>
            </Link>
            <Link>
                <div>About</div>
            </Link>
            <Link>
                <div>Log Out</div>
            </Link>
    </nav>
}

export default Nav;