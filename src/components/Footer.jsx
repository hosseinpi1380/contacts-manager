import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
const Footer = () => {
    return createPortal(
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap w-full justify-between items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                           <Link to='about'>about</Link>
                        </li>
                        <li>
                           <Link to='/'>Home</Link>
                        </li>
                        <li>
                           <Link to='store'>store</Link> 
                        </li>
                        <li>
                            <Link to='contacts'>contacts</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
        , document.getElementById('footer'))
}

export default Footer