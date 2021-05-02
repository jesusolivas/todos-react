import "./TodoList.css";
import TodoItem from "./TodoItem";



const TodoList = ({ todos }) => (
    <div className="list">
        <div className="list__headers">
            <div className="list__header">TASK</div>
            <div className="list__header">DUE DATE</div>
            <div className="list__header">STATUS</div>
        </div>
        <div className="list__body">
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    </div>
);

export default TodoList;