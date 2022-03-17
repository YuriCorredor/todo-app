import { useState } from "react"

export default function TodoForm({ _createTodo }) {

    const [todoTitle, setTodoTitle] = useState('')

    const handleChangeTodo = e => {
        setTodoTitle(e.target.value)
    }

    const handleCreateTodo = () => {
        _createTodo(todoTitle)
    }

    return (
        <div className='flex flex-col p-1 items-center border-[1px] rounded-md shadow-lg'>
            <textarea
                value={todoTitle}
                onChange={handleChangeTodo}
                cols='60'
                autoComplete='none'
                className={`p-2 m-2 text-center bg-inherit w-full outline-none resize-none scrollbar
                    text-white
                `}
            />
            <svg onClick={handleCreateTodo} className="cursor-pointer h-7 w-7 hover:fill-white hover:stroke-[#d8308a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}
