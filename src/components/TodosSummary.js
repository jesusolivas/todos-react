// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import AuthContext from "../context/auth";
import TodosContext from "../context/todos";
import { getTodayVisibleTodos } from "../selectors/todos";
import { setDueDate } from "../actions/todos";

// Styles
import "./TodosSummary.css"

const onTodayClick = (dispatch) => {
    dispatch(setDueDate(new Date()));
};

const renderSummaryMessage = (count, isLoading, displayName, dispatch) => {
    const userFirstName = displayName.split(" ")[0].toUpperCase();
    if (isLoading && count === 0) {
        return <h1>{userFirstName}, WE ARE COUNTING YOUR TODOS, HANG IN THERE!</h1>;
    } else if (count === 0) {
        return <h1>{userFirstName}, NO TODOS FOR TODAY, ENJOY!</h1>;
    } else {
        return (
            <h1>
                {userFirstName}, YOU HAVE <span>{count}</span> TODOS FOR <button className="summary__today" onClick={onTodayClick.bind(null, dispatch)}>TODAY</button>
            </h1>
        );
    }
};

const TodosSummary = () => {
    const { displayName } = useContext(AuthContext);
    const { todos, isLoading, dispatch } = useContext(TodosContext);
    const visibleTodos = getTodayVisibleTodos(todos);
    return (
        <div className="summary hidden">
            {renderSummaryMessage(visibleTodos.length, isLoading, displayName, dispatch)}
        </div>
    );
};

export default TodosSummary;