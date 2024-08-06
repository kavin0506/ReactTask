import { Link, useNavigate } from "react-router-dom";

const Login=()=>{
   const navigate= useNavigate()

    const handleSumbit=()=>{
navigate("/about")
    }
    return(
        <>
        <h2>Login Page</h2>
        <Link to='/contact/kavin' style={{margin:"10px"}}>Contact</Link>
        <button onClick={()=>handleSumbit()}>Login</button>

        </>
    )
}

export default Login;