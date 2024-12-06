import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ProtectedRoutes = ({ children }) => {
    const {token, isLoading} = useContext(AuthContext);
    if(isLoading == true ) return (
        <div>Loading...</div>
    );
    return token ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes


ProtectedRoutes.propTypes = {
    children: PropTypes.any
};