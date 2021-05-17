// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import AuthContext from "../context/auth";
import { startLogin } from "../actions/auth";

// Styles
import "./Login.css";

export const Login = () => {
    const { dispatch } = useContext(AuthContext);
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1>Todos</h1>
                <p>Get your Todos done!</p>
                <button className="button" onClick={startLogin.bind(null, dispatch)}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
