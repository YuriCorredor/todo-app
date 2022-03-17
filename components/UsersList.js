import UserItem from './UserItem'

export default function UsersList({ users }) {
    return (
        <div className='flex flex-col w-full justify-center place-items-center bg-[#2f338d] p-4 overflow-hidden'>
            {users?.map(user => <UserItem key={user.id} user={user} />)}
        </div>
    )
}