// Third party dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Internal dependencies
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateTodo from "../pages/CreateTodo";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
    <>
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/create" component={CreateTodo} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </>
);

export default AppRouter;