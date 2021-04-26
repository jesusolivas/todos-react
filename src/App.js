import Header from "./components/Header";
import Container from "./components/Container";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <TodoList />
      </Container>
    </>
  );
}

export default App;
