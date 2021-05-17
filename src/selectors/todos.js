export const getVisibleTodos = (todos, filter) => {
    const normalizedFilterDescription = filter.description.trim().toLowerCase();
    return todos.filter(x => {
        console.log(filter.dueDate.toLocaleDateString());
        console.log(x.dueDate);
        const normalizedDescription = x.description.trim().toLowerCase();
        return (normalizedFilterDescription === "" || normalizedDescription.startsWith(normalizedFilterDescription))
            && filter.dueDate.toLocaleDateString() === x.dueDate;
    });
};