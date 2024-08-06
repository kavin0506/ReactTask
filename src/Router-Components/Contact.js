import { useParams } from "react-router-dom";

const ContactRoute=()=>{

    const{num}=useParams()
    return(
        <>
        <h2>Contact Page</h2>
        <p>name {num}</p>
        </>
    )
}

export default ContactRoute;