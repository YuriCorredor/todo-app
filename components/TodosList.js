import { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { createTodo } from '../services/api'
import { v4 as uuid } from 'uuid'

export default function TodosList({ _todos, user }) {

    const [todos, setTodos] = useState(_todos)

    const _createTodo = async title => {
        if (title === '') return
        const todo = await createTodo(title, user.id)
        // as the id that comes from the request is not unique, we will have to add our own
        const id = uuid()
        todo.id = id
        const newTodos = [...todos]
        newTodos.unshift(todo)
        setTodos(newTodos)
    }

    return (
        <>
            <TodoForm _createTodo={_createTodo} />
            {todos?.map(todo => <TodoItem key={todo.id} _todo={todo} />)}
        </>
    )
}
