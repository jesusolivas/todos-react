import "./TodosSummary.css"

const TodosSummary = ({ count }) => (
    <div className="summary">
        {
            count === 0 ? (
                <h1>NO TODOS FOR TODAY, ENJOY!</h1>
            ) : (
                <h1>YOU HAVE <strong>{count} TODOS FOR TODAY</strong></h1>
            )
        }
    </div>
);

export default TodosSummary;