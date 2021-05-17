// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import TodosContext from "../context/todos-context";
import { getVisibleTodos } from "../selectors/todos";

// Styles
import "./TodosSummary.css"


const renderSummaryMessage = (count, isLoading) => {
    if (isLoading && count === 0) {
        return <h1>WE ARE COUNTING YOUR TODOS, HANG IN THERE!</h1>;
    } else if (count === 0) {
        return <h1>NO TODOS FOR TODAY, ENJOY!</h1>;
    } else {
        return <h1>YOU HAVE <strong>{count} TODOS FOR TODAY</strong></h1>;
    }
};

const TodosSummary = () => {
    const { todos, isLoading, filter } = useContext(TodosContext);
    const visibleTodos = getVisibleTodos(todos, filter);
    return (
        <div className="summary hidden">
            {renderSummaryMessage(visibleTodos.length, isLoading)}
        </div>
    );
};

export default TodosSummary;