// Third party dependencies
import { useContext, useEffect, useReducer } from "react";

// Internal dependencies
import Todos from "../components/Todos";
import TodosContext from "../context/todos";
import AuthContext from "../context/auth";
import { todosReducer } from "../reducers/todos";
import { getTodos } from "../actions/todos";

const defaultState = {
    todos: [],
    isLoading: false,
    filter: {
        description: "",
        dueDate: new Date(),
    },
};

const Home = () => {
    const [state, dispatch] = useReducer(todosReducer, defaultState);
    const { uid } = useContext(AuthContext);
    useEffect(() => {
        getTodos(dispatch, uid);
    }, [uid]);

    return (
        <TodosContext.Provider value={{ ...state, dispatch }}>
            <Todos />
        </TodosContext.Provider>
    );
};

export default Home;
