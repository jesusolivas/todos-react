// Third party dependencies
import { useEffect, useReducer } from "react";

// Internal dependencies
import Todos from "../components/Todos";
import TodosContext from "../context/todos-context";
import { todosReducer } from "../reducers/todos";
import { getTodos } from "../actions/todos";

const defaultState = {
    todos: [],
    isLoading: false,
    filter: {
        description: "",
        dueDate: new Date()
    }
};

const Home = () => {
    
    const [state, dispatch] = useReducer(todosReducer, defaultState);

    useEffect(() => {
        getTodos(dispatch);
    }, []);

    return (
        <TodosContext.Provider value={{ ...state, dispatch }}>
            <Todos />
        </TodosContext.Provider>
    );
};

export default Home;