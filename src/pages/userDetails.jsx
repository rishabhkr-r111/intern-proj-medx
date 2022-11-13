import { auth} from '../firebase-config'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

function UserDetails({ user }) {

    const signout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>hiiiiiiii</div>
            <div>{ auth.currentUser?.email}</div>

            <Link to='/' onClick={signout} className='bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium m-auto'> Sign Out</Link>

        </>
    )
}

export default UserDetails