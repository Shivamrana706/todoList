

export const addTodoList = (data) => {

    return {
        type: 'ADD_TODO_DATA',
        data
    }
}
export const removeTodoList = (data) => {
    console.log("action.data removeTodoList", data)
    return {

        type: 'REMOVE_TODO_DATA',
        data
    }
}

