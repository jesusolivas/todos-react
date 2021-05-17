// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import AuthContext from "../context/auth";
import { startLogout } from "../actions/auth";

// Styles
import "./Header.css"

const Header = () => {
    const { dispatch } = useContext(AuthContext);
    return (
        <header className="header">
            <div></div>
            <div>TODOS APP</div>
            <div>
                <button className="button" onClick={startLogout.bind(null, dispatch)}>Sign Out</button>
            </div>
        </header>
    );
};

export default Header;