const url = "https://jsonplaceholder.typicode.com"

export const getUsers = async userId => {
    let users
    try {
        const response = userId ? await fetch(`${url}/users?id=${userId}`) : await fetch(`${url}/users`)
        users = await response.json()
        console.log(users)
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