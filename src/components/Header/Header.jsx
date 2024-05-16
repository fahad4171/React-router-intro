import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h2>This my Website</h2>
                {/* in react router we use <Link> instead of <a> to avoid reloading */}
                <Link to='/'>Home</Link>
                
                {/* A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning". */}
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                
                
            </nav> 
        </div>
    );
};

export default Header;