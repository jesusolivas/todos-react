export const getVisibleTodos = (todos, filter) => {
    const normalizedFilterDescription = filter.description.trim().toLowerCase();
    return todos.filter(x => {
        const normalizedDescription = x.description.trim().toLowerCase();
        return (normalizedFilterDescription === "" || normalizedDescription.startsWith(normalizedFilterDescription))
            && filter.dueDate.toLocaleDateString() === x.dueDate;
    });
};

export const getTodayVisibleTodos = (todos) => {
    return todos.filter(x => new Date().toLocaleDateString() === x.dueDate);
};