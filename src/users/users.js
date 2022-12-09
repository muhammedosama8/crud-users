import { useEffect, useState } from 'react';
import './users.css'
import { db } from '../shared/firebase-config'
import { collection, getDocs } from 'firebase/firestore';
import User from './user/user';
import { Link } from 'react-router-dom';


function Users(){
    const [users, setUsers] = useState([])
    const usersCollection = collection(db, 'users')
    
    const getUsers = async () =>{
        const data = await getDocs(usersCollection);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    useEffect(() => {
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[users])

    return (
        <>
        <p className='add'><Link to='/add-user'>Add User</Link></p>
        <div className='users'>
            {users?.map((user) => (
                <div className='user' key={user.id}>
                    <User user={user} />
                </div>
            ))}
        </div>
        </>
    );
}

export default Users;