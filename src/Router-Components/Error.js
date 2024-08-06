import { Link } from "react-router-dom";

const ErrorPage=()=>{
    return(
        <>
        
        <h2>404 Error go back home page</h2>
        <Link to='/'><p>Home</p></Link>
        
        </>
    )
}

export default ErrorPage;