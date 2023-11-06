import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import TitlePage from '../../components/TitlePage';
import { confirmAlert } from 'react-confirm-alert';
import _ from 'lodash';
import axios from 'axios';
import { useContact } from '../../hooks/useContext';
import { ToastContainer, toast } from 'react-toastify';
const Contacts = () => {
    const navigate = useNavigate();
    const { contacts, setContacts } = useContact();
    useEffect(() => {
        const mountComponent = async () => {
            try {
                const { data } = await axios.get('https://server-sample-6hhd.onrender.com/api/contacts')
                setContacts(data)

            } catch (err) {
                console.log(err.message, err.status)
            }
        }
        mountComponent()
    }, [])
    const deleteHandler = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div
                        className='custom-ui bg-gray-800 text-white p-3 rounded-md 
                    place-items-center grid min-h-full'>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this file?</p>
                        <div className='w-full flex flex-row justify-between'>
                            <button
                                className='bg-blue-600 p-1 rounded-md'
                                onClick={onClose}>No</button>
                            <button
                                className='bg-red-600 p-1 rounded-md'
                                onClick={() => {
                                    confirmDelete(id)
                                    onClose();
                                }}
                            >
                                Yes, Delete it!
                            </button>

                        </div>
                    </div>
                );
            }
        });
    }
    const getData = async () => {
        try {
            const response = await axios.get('https://server-sample-6hhd.onrender.com/api/contacts');
            return response
        } catch (err) {
            console.log(err.message, err.status)
        }
    }
    
    const confirmDelete = async id => {
        try {
            const response = await axios.delete(`https://server-sample-6hhd.onrender.com/api/contacts/${id}`)
            console.log(response.statusText)
            const { data } = await getData();
            console.log(data)
            setContacts(data)
            toast.error('مخاطب با موفقیت حذف شد!')

        } catch (err) {
            console.log(err.message, err.status)
        }
    }

    return (
        <>
            <ToastContainer rtl={true}/>
            <TitlePage title='contacts' />
            <div className='contacts_btn'>
                <button className='create-btn' onClick={() => {
                    navigate('/register')
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ساختن مخاطب جدید</button>
                <input type="text" placeholder='جستوجو مخاطب' className='bg-blue-600 placeholder:text-white p-2 rounded-md text-white' />
            </div>
            <div className="contacts-container">
                {contacts &&
                    contacts.map(el =>
                        <div className="contact shadow-md w-full p-2 inline-flex flex-1 max-sm:w-full" dir='rtl'
                            key={el.name}>
                            <div className="info">
                                اسم {el.name}
                                <div className="date">
                                    ثبت نام شده در تاریخ:
                                    <h4>{el.dateCreated}</h4>
                                </div>
                            </div>
                            <div className="actions items-center flex justify-between">
                                <button className='p-2 rounded-md shadow-sm bg-blue-500 text-white'
                                    onClick={() => navigate(`/edit/${el.id}`)}>edit</button>
                                <button className='p-2 rounded-md shadow-sm bg-green-500 text-white'
                                    onClick={() => navigate(`/detail/${el.id}`)}>view</button>
                                <button
                                    onClick={() => deleteHandler(el.id)}
                                    className='p-2 rounded-md shadow-sm bg-red-500 text-white'>delete</button>
                            </div>
                        </div>)}
            </div>
            <Outlet />
        </>
    )
}

export default Contacts;