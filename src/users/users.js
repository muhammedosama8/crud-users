import { useEffect, useState } from 'react';
import './users.css'
import { db } from '../shared/firebase-config'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import User from './user/user';
import { Link } from 'react-router-dom';


function Users(){
    const [users, setUsers] = useState([])
    const getUsers = async () =>{
        const data = await getDocs(collection(db, 'users'));
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    useEffect(() => {
        getUsers()
        console.log("users.js")
    },[])
    const deleteUser = async (id)=> {
        const userDoc = doc(db, 'users', id)
        await deleteDoc(userDoc)
        await getUsers()
    }
    return (
        <>
        <p className='add'><Link to='/add-user'>Add User</Link></p>
        <div className='users'>
            {users.length> 0 ? users?.map((user) => (
                <div className='user' key={user.id}>
                    <User user={user} deleteUser={deleteUser} />
                </div>
            )) : <h2 className='no-users'>No Users Found</h2>}
        </div> 
        </>
    );
}

export default Users;