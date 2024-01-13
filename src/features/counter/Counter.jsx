import React, { useState } from 'react'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'
import { Button, Typography, } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const addValue = Number(value) || 0;

    return (
        <div>
            <Button fullWidth variant='contained' color='success' onClick={() => dispatch(increment())}>+</Button>
            <Typography variant='h5' >{count.count}</Typography>
            <Button fullWidth variant='contained' color='error' onClick={() => dispatch(decrement())}>-</Button>
            <Button variant='contained' onClick={() => dispatch(reset())}>reset count</Button>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button variant='contained' onClick={() => dispatch(incrementByAmount(addValue))}>increment by {addValue}</Button >
            
        </div>
    )
}

export default Counter
