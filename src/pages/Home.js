import Header from "../components/Header";
import Container from "../components/Container";
import Todos from "../components/Todos";

const Home = () => (
    <>
        <Header />
        <Container>
            <Todos />
        </Container>
    </>
);

export default Home;