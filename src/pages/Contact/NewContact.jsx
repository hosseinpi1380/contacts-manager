import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import contactSchema from '../../validation/contactValidation';
import TitlePage from '../../components/TitlePage'
import { ToastContainer, toast } from 'react-toastify';
const NewContact = () => {
    const navigate = useNavigate();
    const createUser = async (info) => {
        try {
            let response = await axios.post('https://server-contacts.onrender.com/contacts', info)
            console.log(response)
            toast.success('مخاطب با موفقیت ساخته شد', { icon: '✔' })
        } catch (err) {
            console.log(err.message)
            console.log(err.inner)
        }
    }
    return (
        <>
            <ToastContainer rtl={true} autoClose={500} />
            <div className="new-contact place-items-center min-h-full" dir='rtl'>
                <Formik
                    initialValues={{ name: '', email: '', password: '', dateCreated: new Date().toLocaleString() }}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        createUser(values)
                        navigate(-1)
                    }}
                >
                    <Form>
                        <TitlePage title='ساخت مخاطب جدید' />
                        <div>
                            <label>نام</label>
                            <Field name='name'
                                id='name'
                                type="text" placeholder='نام'
                            />
                            <ErrorMessage
                                name='name' render={(msg) => (<div className='error-label-message'>{msg}</div>)} />
                        </div>
                        <div>
                            <label>ایمیل</label>
                            <Field name='email'
                                id='email'
                                type="text" placeholder='ایمیل'
                            />
                            <ErrorMessage
                                name='email' render={(msg) => (<div className='error-label-message'>{msg}</div>)} />
                        </div>
                        <div>
                            <label>گذرواژه</label>
                            <Field name='password'
                                id='password'
                                type="text" placeholder='گذرواژه'
                            />
                            <ErrorMessage className='bg-red-700 text-center p-1 rounded-md w-full'
                                name='password' render={(msg) => (<div className='error-label-message'>{msg}</div>)} />
                        </div>
                        <div className="buttons">
                            <button className='create-user-btn'
                                type='submit'
                            >ساخت</button>
                            <button type='reset' className='bg-green-600 mb-1 p-1 rounded-md text-white'>reset</button>
                            <button className='cancel-create-btn'
                                onClick={() => navigate('/contacts')}>لغو</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default NewContact