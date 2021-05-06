import { useContext } from "react";
import TodosContext from "../context/todos-context";
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
    const { todos, isLoading } = useContext(TodosContext);
    return (
        <div className="summary hidden">
            {renderSummaryMessage(todos.length, isLoading)}
        </div>
    );
};

export default TodosSummary;