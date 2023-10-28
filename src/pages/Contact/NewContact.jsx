import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik, Formik, Field,Form,ErrorMessage } from 'formik';
import contactSchema from '../../validation/contactValidation';
import TitlePage from '../../components/TitlePage'

const NewContact = () => {
    const navigate = useNavigate();
    // const formik = useFormik({
    //     initialValues: {
    //         name: '', email: '', password: '', dateTime: new Date().toLocaleDateString()
    //     },
    //     validationSchema: contactSchema,
    //     onSubmit: (values, { resetForm }) => {
    //         console.log('values', values)
    //         createUser(values)
    //         resetForm({ values: '' })
    //     },
    // });
    const createUser = async (info) => {
        try {
            let { statusText } = await axios.post('http://localhost:4000/employees', info)
            console.log('send', statusText)
        } catch (err) {
            console.log(err.message)
            console.log(err.inner)
        }
    }
    return (
        <>
            <div className="new-contact place-items-center min-h-full" dir='rtl'>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        createUser(values)
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
                            name='name' render={(msg)=>(<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)}/>
                        </div>
                        <div>
                            <label>ایمیل</label>
                            <Field name='email'
                                id='email'
                                type="text" placeholder='ایمیل'
                            />
                            <ErrorMessage
                            name='email' render={(msg)=>(<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)}/>
                        </div>
                        <div>
                            <label>گذرواژه</label>
                            <Field name='password'
                                id='password'
                                type="text" placeholder='گذرواژه'
                            />
                            <ErrorMessage className='bg-red-700 text-center p-1 rounded-md w-full'
                            name='password' render={(msg)=>(<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)}/>
                        </div>
                        <div className="buttons">
                            <button className='create-user-btn'
                                type='submit'
                            >ساخت</button>
                            <button className='cancel-create-btn
                        ' onClick={() => navigate('/contacts')}>لغو</button>
                        </div>
                    </Form>
                </Formik>
            </div >
        </>
    )
}

export default NewContact