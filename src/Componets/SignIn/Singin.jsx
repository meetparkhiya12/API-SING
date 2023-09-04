import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Singin() {


    const [inputValue, setinputValue] = useState(
        {
            username: '',
            password: ''
        }
    );


    const handlechange = (e) => {
        setinputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    return (


        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div class=" w-full max-w-xs mt-5">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className='my-2'>Log In</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={inputValue.username} name='username' onChange={(e) => handlechange(e)} />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={inputValue.password} name='password' onChange={(e) => handlechange(e)} />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Log In
                            </button>
                            <NavLink class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" to='/'>
                                Back
                            </NavLink>
                            
                        </div>
                    </form>
                    {/* <p class="text-center text-gray-500 text-xs">
                        Alredy have a Account <Navlink></Navlink>
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default Singin