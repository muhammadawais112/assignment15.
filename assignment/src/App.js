import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
const data = [

    {
        uid: uuidv4(),
        nameFir: 'Ali',
        nameLas: 'Ali',
        email: 'learnwithnaveedsarwar@gmail.com',

    },


    {
        uid: uuidv4(),
        nameFir: 'Ali',
        nameLas: 'Ali',
        email: 'umar@gmail.com',

    },


    {
        uid: uuidv4(),
        nameFir: 'Ali',
        nameLas: 'Ali',
        email: 'Ali@gmail.com',

    },




]

export default function App() {

    const [empNameFir, seteEmpNameFir] = useState('')
    const [empNameLas, seteEmpNameLas] = useState('')
    const [email, setEmail] = useState('')


    const [students, setStudents] = useState(data)


    const [isUpdate, setIsUpdate] = useState(true)
    const [updateUid, setUpdateUid] = useState(0)



    const onChangeNameHandler = (e) => {
        console.log('event---', e.target.value);
        seteEmpNameFir(e.target.value)
        seteEmpNameLas(e.target.value)
    }

    const onSubmitHandler = () => {
        console.log('submit button clicked');
        if (!empNameFir || !empNameLas || !email) {
            alert('All inputs are required')
            return
        }

        // do some logics with the form data
        console.log('Values', empNameFir, empNameLas, email)

        let student = {
            uid: uuidv4(),
            nameFir: empNameFir,
            nameLas: empNameLas,
            email: email,

        }

        setStudents([...students, student])

        seteEmpNameFir("")
        seteEmpNameLas("")

        setEmail('')
    }

    const onDeleteHandler = (uid) => {

        console.log('email', uid);

        let newStudents = students.filter((student) => student.uid !== uid)

        setStudents(newStudents)

    }

    const onUpdateHandler = (item, index) => {
        seteEmpNameFir(item.nameFir)
        seteEmpNameLas(item.nameLas)

        setEmail(item.email)
        setUpdateUid(item)
        setIsUpdate(false)
    }

    const onCtaUpdate = () => {
        console.log('onCtaUpdate');

        let student = {
            nameFir: empNameFir,
            nameLas: empNameLas,
            email: email,

        }


        let newStudents = students.map((item, index) => {
            if (item.uid === updateUid) {
                return student
            }
            else {
                return item
            }
        })

        setStudents(newStudents)
        seteEmpNameFir('')
        seteEmpNameLas('')

        setEmail('')


        setIsUpdate(false)



    }


    return (

        <div>
            <h1>User  Form</h1>
            <div>First Name <input onChange={(e) => seteEmpNameFir(e.target.value)} value={empNameFir} placeholder='enter your name' type='text' /> </div>
            <div>Last Name <input onChange={(e) => seteEmpNameLas(e.target.value)} value={empNameLas} placeholder='enter your name' type='text' /> </div>

            <div>Email User <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter your Email' type='text' /> </div>

            {isUpdate ?
                <button onClick={onCtaUpdate}>Update</button> :
                <button onClick={onSubmitHandler}>Submit</button>
            }


            <h1>List of Students</h1>

            <table border="1px">
                <tr className='customTable'>
                    <th>No.</th>
                    <th>UID</th>
                    <th>Empolyee First Name</th>
                    <th>Empolyee Last Name</th>
                    <th>Email</th>

                    <th>Actions</th>
                </tr>

                {
                    students.map((item, index) => {
                        return (
                            <tr key={index} className='customTable'>
                                <td>{index + 1}</td>
                                <td>{item.uid}</td>
                                <td>{item.nameFir}</td>
                                <td>{item.nameLas}</td>

                                <td>{item.email}</td>

                                <td>
                                    <button style={{ backgroundColor: "aqua" }} onClick={() => onDeleteHandler(item.uid)}>Delete</button>
                                    <button style={{ backgroundColor: "red" }} onClick={() => onUpdateHandler(item)}>Update</button>
                                    <button style={{ backgroundColor: "aqua" }} onClick={() => onUpdateHandler(item)}>View</button>

                                </td>
                            </tr>
                        )
                    })
                }


            </table>



        </div>
    )
}