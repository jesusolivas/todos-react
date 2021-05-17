// Third party dependencies
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// Internal dependencies
import AuthContext from "../context/auth";
import Header from "../components/Header";
import Container from "../components/Container";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <>
                    <Header />
                    <Container>
                        <Component {...props} />
                    </Container>
                </>
            ) : (
                <Redirect to="/" />
            )
        )} />
    )
};

export default PrivateRoute;
