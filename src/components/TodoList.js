import TodoItem from "./TodoItem";
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

const TodoList = ({ todos, isLoading }) => (
    <div className="list">
        <div className="list__headers">
            <div className="list__header">TODO</div>
            <div className="list__header">DUE DATE</div>
            <div className="list__header">STATUS</div>
        </div>
        <div className="list__body">
            {renderListItems(todos, isLoading)}
        </div>
    </div>
);

export default TodoList;