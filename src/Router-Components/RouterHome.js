import { Link, useNavigate } from "react-router-dom";
import "./style.css"

const HomeRouter=()=>{

   const nav= useNavigate()

    const handleLogin=()=>{
     if(nav){
        nav("/login")
     }
     else{
        nav("*")
     }
    }


    return(
        <>
        <div className="home">
            <h2>Home Page </h2>
                <div className="loginBtn">
                    <input type="text" placeholder="Enter Your Name  "/>
                    <input type="number"  placeholder="Enter Your Age"/>
                     <button onClick={ ()=>handleLogin()}>Login</button>
                </div>
            </div>
        </>
    )
}

export default HomeRouter;