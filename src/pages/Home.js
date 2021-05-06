import { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { database } from "../firebase/firebase";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        database.ref("todos")
            .once("value")
            .then((snapshot) => {
                const todos = [];

                snapshot.forEach((item) => {
                    todos.push({
                        id: item.key,
                        ...item.val()
                    });
                });

                setTodos(todos);
                setIsLoading(false);
            });
    }, []);

    return (<Todos todos={todos} isLoading={isLoading} />);
};

export default Home;