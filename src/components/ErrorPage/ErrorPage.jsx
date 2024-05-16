import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    /* using useRouteError, we see details of error in inspect mode. also change or add error status or message we want to show  */
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Opps!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 &&
                <div>
                    <h3>page not found</h3>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;