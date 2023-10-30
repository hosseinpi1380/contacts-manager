import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import TitlePage from '../../components/TitlePage';
import contactSchema from '../../validation/contactValidation';
import axios from 'axios';
import { useContact } from '../../hooks/useContext';

const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contact, setContact } = useContact();
    const getContactWithId = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/employees/${id}`)
            return data;
        }
        catch (err) {
            console.log(err.message, err.status)
        }
    };
    useEffect(() => {
        const mounting = async () => {
            try {
                const response = await getContactWithId()
                console.log(response)
                setContact(contact)
                
            } catch (err) {
                console.log(err.message)
            }
        }
        mounting()
    }, []);
    useEffect(()=>{
        console.log(contact)
    },[contact]);
    const putHandler = async (values) => {
        try {
            const response = await axios.put(`http://localhost:4000/employees/${id}`, values)
            console.log(response.status, response.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <>
            <TitlePage title={`edit contact number ${id}`} />
            <div className="form" dir='rtl'>
                <Formik
                    initialValues={{ name: contact.name, 
                    email: contact.email, password: contact.password}}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        putHandler(values)
                    }}
                >
                    <Form>
                        <div>
                            <label>نام</label>
                            <Field name='name'
                                id='name'
                                type="text" placeholder='نام'
                            />
                            <ErrorMessage
                                name='name'
                                render={(msg) => (<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)} />
                        </div>
                        <div>
                            <label>ایمیل</label>
                            <Field name='email'
                                id='email'
                                type="text" placeholder='ایمیل'
                            />
                            <ErrorMessage
                                name='email'
                                render={(msg) => (<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)} />
                        </div>
                        <div>
                            <label>گذرواژه</label>
                            <Field name='password'
                                id='password'
                                type="text" placeholder='گذرواژه'
                            />
                            <ErrorMessage
                                name='password'
                                render={(msg) => (<div className='bg-red-700 text-center p-1 rounded-md w-full'>{msg}</div>)} />
                        </div>
                        <div className="buttons">
                            <button className='create-user-btn'
                                type='submit'
                                onClick={()=>navigate(-1)}
                            >ثبت ویرایش</button>
                            <button className='cancel-create-btn
                        ' onClick={() => navigate('/contacts')}>لغو</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default EditContact