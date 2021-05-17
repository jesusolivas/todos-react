// Third party dependencies
import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';

// Internal dependencies
import AuthContext from "../context/auth";

export const PublicRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/home" />
            ) : (
                <Component {...props} />
            )
        )} />
    )
};

export default PublicRoute;
