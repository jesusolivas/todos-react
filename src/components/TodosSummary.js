import "./TodosSummary.css"

const renderSummaryMessage = (count, isLoading) => {
    console.log(isLoading);
    if (isLoading && count === 0) {
        return <h1>WE ARE COUNTING YOUR TODOS, HANG IN THERE!</h1>;
    } else if (count === 0) {
        return <h1>NO TODOS FOR TODAY, ENJOY!</h1>;
    } else {
        return <h1>YOU HAVE <strong>{count} TODOS FOR TODAY</strong></h1>;
    }
};

const TodosSummary = ({ count, isLoading }) => (
    <div className="summary hidden">
        {renderSummaryMessage(count, isLoading)}
    </div>
);

export default TodosSummary;