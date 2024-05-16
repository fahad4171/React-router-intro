import { Link } from 'react-router-dom';
import './user.css'

const User = ( {user} ) => {
    const {id, name, email, phone} = user;
    return (
        <div className='userStyle'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* making it dynamic to get each user's specific id */}
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;