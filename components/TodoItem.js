import { useState } from 'react'

export default function TodoItem({ _todo }) {

    const [todo, setTodo] = useState(_todo)

    console.log(todo)

    return (
        <div className="scrollbar p-4 m-6 text-white border-gray-200 border-[1px] rounded-xl shadow-lg">
            <textarea
                
                cols='60'
                autoComplete='none'
                className='bg-inherit outline-none resize-none w-full h-auto max-h-[500px] scrollbar' 
                type='text'
            />
        </div>
    )
}
