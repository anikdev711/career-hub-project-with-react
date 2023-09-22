import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Not Found</h3>
            <button className="btn btn-secondary text-white font-bold"><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;