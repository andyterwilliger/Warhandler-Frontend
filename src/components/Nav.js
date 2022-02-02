import { Link } from 'react-router-dom';

function Nav(props) {
    return <nav className = 'nav'>
        <Link to='/'>
            <div>Home</div>
            </Link>
            <Link to='/Index'>
                <div>Index</div>
            </Link>
            <Link to='/units'>
                <div>Create New Unit</div>
            </Link>
            
    </nav>
}

export default Nav;