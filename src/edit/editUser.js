import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../shared/firebase-config";
import './editUser.css'

function EditUser(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [date, setDate] = useState()
    const userCollection = doc(db, "users",id);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const docDataUpdate = {
            name,
            age: Number(age),
            email,
            birthdate: date
        }
        await updateDoc(userCollection, docDataUpdate)
        
        navigate('/')
    }
    useEffect(()=> {
        getDoc(userCollection).then(res => {
            setName(res.data().name)
            setAge(res.data().age)
            setDate(res.data().birthdate)
            setEmail(res.data().email)
        })
        console.log("edit.js")
    },[userCollection])

    return (
        <>
        <h1> Edit User</h1>
        <form onSubmit={handleSubmit} className='form'>
            <p className="back"><Link to='/'>Home</Link></p>
            <label>
                Name:
                <input type='text' required className='name' placeholder='Enter Name' value={name}    onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type='email' required className='email' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Age:
                <input type='number' required className='age' placeholder='Enter Age' value={age} onChange={e => setAge(e.target.value)} />
            </label>
            <label>
                Birth Day:
                <input type='date' value={date} className='birthdate' onChange={e => setDate(e.target.value)} required />
            </label>

            <input className="submit" type='submit' value='Edit User' />
        </form>
        </>
    )
}

export default EditUser;