import { Outlet, Navigate } from "react-router-dom";


var Safe = () =>{
    let data = {'token':true}
    
    return(
        data.token ? <Outlet></Outlet> : <Navigate to="/"></Navigate>
    )
}


export default Safe;

