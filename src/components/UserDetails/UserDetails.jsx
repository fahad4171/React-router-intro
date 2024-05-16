import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, website, } = user;
    return (
        <div>
           <h2>Details about users:</h2> 
           <h3>{name}</h3>
           <h4>Email: {email}</h4>
           <h4>Website: {website}</h4>
        </div>
    );
};

export default UserDetails;