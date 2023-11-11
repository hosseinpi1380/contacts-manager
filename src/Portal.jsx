import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import _ from 'lodash'

const Modal = () => {
    const [query,setCount]=useState('');
    const throttelFunction = _.throttle(() => {
        console.log('search for:')
    },3000)
    const handleInputChange=(e)=>{
       const value=e.target.value;
        setCount(value)
        throttelFunction()
    }
    return createPortal(
        <div style={{padding:'0 30px'}}>
        <input type="text" onChange={handleInputChange} value={query} />
        </div>
        , document.getElementById('modal-root')
    );
}

export default Modal;