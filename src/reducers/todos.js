const todosReducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true }
        case 'FINISHED_LOADING':
            return { ...state, isLoading: false, todos: action.todos }
        default:
            return state
    }
}

export { todosReducer };