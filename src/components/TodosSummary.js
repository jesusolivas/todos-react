// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import TodosContext from "../context/todos-context";
import { getTodayVisibleTodos } from "../selectors/todos";
import { setDueDate } from "../actions/todos";

// Styles
import "./TodosSummary.css"

const onTodayClick = (dispatch) => {
    dispatch(setDueDate(new Date()));
};

const renderSummaryMessage = (count, isLoading, dispatch) => {
    if (isLoading && count === 0) {
        return <h1>WE ARE COUNTING YOUR TODOS, HANG IN THERE!</h1>;
    } else if (count === 0) {
        return <h1>NO TODOS FOR TODAY, ENJOY!</h1>;
    } else {
        return (
            <h1>
                YOU HAVE <span>{count}</span> TODOS FOR <button className="summary__today" onClick={onTodayClick.bind(null, dispatch)}>TODAY</button>
            </h1>
        );
    }
};

const TodosSummary = () => {
    const { todos, isLoading, dispatch } = useContext(TodosContext);
    const visibleTodos = getTodayVisibleTodos(todos);
    return (
        <div className="summary hidden">
            {renderSummaryMessage(visibleTodos.length, isLoading, dispatch)}
        </div>
    );
};

export default TodosSummary;