import "./TodoList.css";
import TodoItem from "./TodoItem";

const todos = [
    {
        id: 1,
        description: "Todo 1",
        dueDate: "02/05/2021",
        status: "Pending"
    },
    {
        id: 2,
        description: "Todo 2",
        dueDate: "03/05/2021",
        status: "Pending"
    },
    {
        id: 3,
        description: "Todo 3",
        dueDate: "04/05/2021",
        status: "Pending"
    }
];

const TodoList = () => (
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