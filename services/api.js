const url = "https://jsonplaceholder.typicode.com"

export const getUsers = async userId => {
    let users
    try {
        const response = userId ? await fetch(`${url}/users?id=${userId}`) : await fetch(`${url}/users`)
        users = await response.json()
    } catch (error) {
        console.log(error)
    }

    return users
}

export const getTodosFromUser = async userId => {
    let todos
    try {
        const response = await fetch(`${url}/todos?userId=${userId}`)
        todos = await response.json()
    } catch (error) {
        console.log(error)
    }
    
    return todos
}

export const updateTitle = async (todoId, title) => {
    let todo
    const options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title
        })
    }
    try {
        const response = await fetch(`${url}/todos/${todoId}`, options)
        todo = await response.json()
    } catch (error) {
        console.log(error)
    }

    return todo
}

export const updateCompleted = async (todoId, completed) => {
    let todo
    const options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            completed
        })
    }
    try {
        const response = await fetch(`${url}/todos/${todoId}`, options)
        todo = await response.json()
    } catch (error) {
        console.log(error)
    }

    return todo
}

export const createTodo = async (title, userId) => {
    let todo
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            userId,
            title,
            completed: false
        })
    }
    try {
        const response = await fetch(`${url}/todos`, options)
        todo = await response.json()
    } catch (error) {
        console.log(error)
    }

    return todo
}