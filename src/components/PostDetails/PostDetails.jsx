import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {body, title, id} = post;

    const navigate = useNavigate();

    const handleGoBack = () => {
        /* -1 means go back to previous path */
        navigate(-1)
    }
    return (
        <div>
            <h3>Full blog: {id}</h3>
            <h3><strong>Title</strong>: {title}</h3>
            <p><strong>Description</strong>: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;