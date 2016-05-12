let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const requestTodo = () => ({ type: 'REQUEST_TODO' })

export const receiveTodo = (todo) => ({
    type: 'RECEIVE_TODO',
    todo
})

/*
export const requestError = (error) => ({
    type: 'REQUEST_ERROR',
    error
})
 */

let fetched = 100

export const fetchTodo = () => {
    return (dispatch) => {
        dispatch(requestTodo())
        // here there should a an Ajax call
        setTimeout(() => {
            dispatch(receiveTodo({ id: fetched++, text: 'a remote todo' }))
        }, 500)
        // in the catch: dispatch(requestError(error))
    }
}
