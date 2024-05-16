import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {
    /* receiving data here from user route */
    const users = useLoaderData();
    return (
        <div >
            <h4>Name of the users are given below</h4>
            <h4>number of users: {users.length}</h4>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;