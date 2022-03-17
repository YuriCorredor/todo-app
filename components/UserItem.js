import useImage from '../hooks/useImage'
import Link from 'next/link'

export default function UserItem({ user, allInfo }) {

    const imageUrl = useImage()

    const getUserAddress = () => {
        let address

        const city = user.address.city
        const street = user.address.street
        const suite = user.address.suite
        const zipcode = user.address.zipcode

        address = `${city}, ${street}, ${suite} - ${zipcode}`
    
        return address
    }

    return (
        <Link href={`/${user.id}`}>
            <div className='group p-4 m-2 flex space-x-4 justify-center overflow-hidden w-fit cursor-pointer rounded-xl hover:bg-white hover:bg-opacity-20'>
                <img width={80} className='rounded-full w-auto max-h-[70px] max-w-[80px]' src={imageUrl} />
                <div className='text-[#fdfdfe] text-md w-40 font-bold inline-block overflow-hidden'>
                    <p>{user.name}</p>
                    <p className='font-thin text-sm'>({user.username})</p>
                    {allInfo ? 
                    <>
                        <p className='truncate font-thin text-sm'>{user.email}</p>
                        <p className='truncate font-thin ttext-sm'>{user.phone.split(' ')[0]}</p>
                        <div className='hidden whitespace-normal flex-col group-hover:flex'>
                            <p className='p-1 pl-0 font-thin text-sm'>Website: {user.website}</p>
                            <p className='p-1 pl-0 font-thin text-sm'>Endereço: {getUserAddress()}</p>
                            <p className='p-1 pl-0 font-thin text-sm'>Empresa: {user.company.name}</p>
                        </div>
                    </> : <></>}
                </div>    
            </div>
        </Link>
    )
}
