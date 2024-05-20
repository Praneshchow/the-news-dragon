import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();             // previous location before login. 
    console.log('user in private route:', user);

    if (loading){
        return <Spinner animation="border" variant="info" />;
    }
    if (user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login"></Navigate>;
};

export default PrivateRoute;

