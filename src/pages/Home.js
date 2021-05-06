import { useEffect, useReducer } from "react";
import Todos from "../components/Todos";
import { database } from "../firebase/firebase";
import TodosContext from "../context/todos-context";
import { todosReducer } from "../reducers/todos";

const Home = () => {
    const [state, dispatch] = useReducer(todosReducer, { todos: [], isLoading: false });

    useEffect(() => {

        // this is declare as an IIFE to deal with the useEffect race conditions
        (async () => {
            dispatch({ type: "START_LOADING" });

            const todos = [];
            const todosSnapshots = await database.ref("todos").once("value");

            todosSnapshots.forEach((snapshot) => {
                todos.push({
                    id: snapshot.key,
                    ...snapshot.val()
                });
            });

            dispatch({ type: "FINISHED_LOADING", todos: todos });
        })();

    }, []);

    return (
        <TodosContext.Provider value={{ ...state }}>
            <Todos />
        </TodosContext.Provider>
    );
};

export default Home;