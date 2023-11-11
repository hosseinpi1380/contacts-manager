import React, { useState } from "react";
export const style={
    color:"red",padding:'20px'
}
const Colorfull = WrappedComponent => {
    const UpdatedComponent = () => {
        const [count, setCount] = useState(0);
        const increament = () => {
            setCount(prev => prev + 1)
        }
        return (
            <WrappedComponent count={count} increament={increament} />
        )
    }
    return UpdatedComponent
}
export default Colorfull