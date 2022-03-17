import UserItem from './UserItem'
import TodosList from './TodosList'

export default function TodosLayout({ todos, user }) {
    return (
        <div className='bg-[#d8308a] p-4 flex flex-col w-full justify-center place-items-center overflow-hidden'>
            <UserItem user={user} allInfo={true} />
            <TodosList todos={todos} />
        </div>
    )
}
