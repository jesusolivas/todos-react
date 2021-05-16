import { useContext } from "react";
import TodosContext from "../context/todos-context";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const getVisibleTodos = (todos, filter) => {
    const normalizedFilterDescription = filter.description.trim().toLowerCase();
    return todos.filter(x => {
        const normalizedDescription = x.description.trim().toLowerCase();
        return normalizedFilterDescription === "" || normalizedDescription.startsWith(normalizedFilterDescription) 
    });
};

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