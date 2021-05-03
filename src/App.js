import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/create" component={CreateTodo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
