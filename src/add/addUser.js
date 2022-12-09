import { addDoc, collection } from "firebase/firestore";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../shared/firebase-config";
import './addUser.css'

function AddUser(){
    const name = useRef()
    const age = useRef()
    const email = useRef()
    const date = useRef()
    const usersCollection = collection(db, "users");

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const docData = {
            name : name.current.value,
            age: Number(age.current.value),
            email: email.current.value,
            birthdate: date.current.value
        }
        await addDoc(usersCollection, docData);
        
        name.current.value = ''
        age.current.value = ''
        email.current.value= ''
        date.current.value = ''

    }
    return(
        <>
        <h1>Add User</h1>
        
        <form onSubmit={handleSubmit} className='form'>
            <p className="back"><Link to='/'>Home</Link></p>
            <label>
                Name:
                <input type='text' className='name' required placeholder='Enter Name' ref={name} />
            </label>
            <label>
                Email:
                <input type='email' className='email' required placeholder='Enter Email' ref={email} />
            </label>
            <label>
                Age:
                <input type='number' className='age' min='1' required placeholder='Enter Age' ref={age} />
            </label>
            <label>
                Birth Day:
                <input type='date' ref={date} className='birthdate' required />
            </label>

            <input className="submit" type='submit' value='Add User' />
        </form>
        </>
    )
}

export default AddUser;