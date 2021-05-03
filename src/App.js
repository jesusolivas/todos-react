import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/create" component={CreateTodo} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
