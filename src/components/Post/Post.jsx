import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    } 
    return (
        <div className="userStyle">
            <h3>Post ID: {id}</h3>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>read full</Link>
            {/* using useNavigate state and click handler instead of link */}
            <button onClick={handleShowDetail}>click to details</button>

            
        </div>
    );
};

export default Post;