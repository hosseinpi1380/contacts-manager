import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <div className="navbar peer"></div>
            <div className="menu peer-active:opacity-100">
                <ul>
                    <li>
                        <Link>home</Link>
                    </li>
                    <li>
                        <Link>contacts</Link>
                    </li>
                    <li>
                        <Link>shopping</Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </div>
            <h1 className='transition-all duration-100 animate-pulse font-bold text-lg'>hello world</h1></>
    )
}

export default NavBar