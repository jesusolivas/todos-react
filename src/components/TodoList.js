// Third party dependencies
import { useContext } from "react";

// Internal dependencies
import TodosContext from "../context/todos-context";
import TodoItem from "./TodoItem";
import { getVisibleTodos } from "../selectors/todos";

// Styles
import "./TodoList.css";

const renderListItems = (todos, isLoading) => {
    if (isLoading) {
        return <p className="centered-text">LOADING...</p>;
    } else if (todos.length === 0) {
        return <p className="centered-text">NO TODOS FOUND</p>;
    } else {
        return todos.map(todo => <TodoItem key={todo.id} {...todo} />);
    }
};

const TodoList = () => {
    const { todos, isLoading, filter } = useContext(TodosContext);
    const visibleTodos = getVisibleTodos(todos, filter);
    return (
        <div className="list">
            <div className="list__headers">
                <div className="list__header">TODO</div>
                <div className="list__header">DUE DATE</div>
                <div className="list__header">STATUS</div>
            </div>
            <div className="list__body">
                {renderListItems(visibleTodos, isLoading)}
            </div>
        </div>
    );
};

export default TodoList;