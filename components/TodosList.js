import TodoItem from './TodoItem'

export default function TodosList({ todos }) {
    return (
        <div className=''>      
            {todos?.map(todo => <TodoItem key={todo.id} _todo={todo} />)}
        </div>
    )
}
