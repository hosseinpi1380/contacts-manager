import React from 'react'

const Hero = ({ heroName }) => {
    if (heroName === 'joker') {
        throw Error('خطا رخ داده است')
    }
    return (
        <div>{heroName}</div>
    )
}

export default Hero