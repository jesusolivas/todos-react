import Header from "./components/Header";
import Container from "./components/Container";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Todos />
      </Container>
    </>
  );
}

export default App;
