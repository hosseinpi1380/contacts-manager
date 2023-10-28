import React, { useEffect } from 'react'
import TitlePage from '../../components/TitlePage'
import { useNavigate } from 'react-router-dom'
const DetailContact = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('detailContact')
    }, [])
    const submitEditHandler=()=>{
        console.log('edited')
    }
    return (
        <>
            <TitlePage title='detail page' />
            {/* <button className='w-full bg-blue-700 p-2 rounded-md text-white' onClick={()=>submitEditHandler}>ثبت تغییرات</button> */}
            <button className='bg-red-700 text-white p-2 rounded-md w-full' onClick={() => navigate(-1)}>برگشتن</button>
        </>
    )
}

export default DetailContact