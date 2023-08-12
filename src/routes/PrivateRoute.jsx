import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loading){
        return <h3>Loading....</h3>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login'></Navigate>
    
};

export default PrivateRoute;

/**
 *------------------------
        steps 
        
        1. check user is logged in or not 
        2. if user is logged in, then allow them to visit the route 
            else
        3. else redirect the user to the login page 
        4. set up the private routes 
        4. set loading 

 *------------------------
 */