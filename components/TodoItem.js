import { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import { updateTitle, updateCompleted } from '../services/api'

export default function TodoItem({ _todo }) {

    const [todo, setTodo] = useState(_todo)

    const handleCompletedToggle = () => {
        const completed = !todo.completed
        setTodo(prevTodo => {
            return {
                ...prevTodo,
                completed
            }
        })
        debounceCompletedToggle(completed)
    }

    const handleChangeText = e => {
        const title = e.target.value
        setTodo(prevTodo => {
            return {
                ...prevTodo,
                title
            }
        })
        debounceChangeText(title)
    }

    // The request is going to be sent 500ms after the user stops typing
    const debounceChangeText = useCallback(debounce( async title => {
        const updatedTodo = await updateTitle(todo.id, title)
        console.log(updatedTodo)
    }, 500), [])

    const debounceCompletedToggle = useCallback(debounce( async completed => {
        const updatedTodo = await updateCompleted(todo.id, completed)
        console.log(updatedTodo)
    }, 500), [])

    return (
        <div className="flex items-center flex-row p-2 m-6 text-white border-gray-200 border-[1px] rounded-xl shadow-lg">
            <input 
                className={`appearance-none grid place-content-center ml-1 bg-white rounded-md min-w-[16px] min-h-[16px] 
                before:content-[""] before:min-w-[9px] before:min-h-[10px] before:bg-[#d8308a] before:rounded-sm before:scale-0
                before:checked:scale-100 before:transition-all before:duration-100 cursor-pointer`} 
                type='checkbox'
                checked={todo.completed}
                onChange={handleCompletedToggle}
            />
            <textarea
                value={todo.title}
                onChange={handleChangeText}
                cols='60'
                autoComplete='none'
                className={`p-2 ml-2 text-center bg-inherit outline-none resize-none w-full h-auto scrollbar ${todo.completed ? 'line-through opacity-30' : ''}`}
            />
        </div>
    )
}
