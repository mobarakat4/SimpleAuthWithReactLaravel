import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from '../api/axios';
function Login() {
    const [email,SetEmail] = useState('');
    const [password,SetPassword] = useState('');
    const navigate = useNavigate();
    const onS = async (event)=>{
        event.preventDefault();
        try{

            await axios.post(
                'register',
                {
                    email,password
                }
            );
            SetEmail("");
            SetPassword("");
            navigate('/');
        }catch(e){
            console.log(e)
        }

    }
  return (


    
<div className='flex flex-col justify-evenly bg-slate-800 mt-20 rounded w-fit   mx-auto py-16 px-20'>
    <div className='text-purple-300 text-4xl font-mono font-extrabold mb-5'>Login</div>
    <form onSubmit={onS} className="max-w-sm mx-auto mt-4">
    <div className="mb-5 lg:w-80">
        {/* <label for="email" className="block mb-2 text-sm font-medium  text-gray-50">Username</label> */}
        <input type="email"
        value={email}
        onChange={(e)=>SetEmail(e.target.value)}
        id="email" className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        <span className='text-red-500 flex justify-start'>error </span>
    </div>
    <div className="mb-5 lg:w-80">
        {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-50">Password</label> */}
        <input type="password"
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
        id="password" className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
        <span className='text-red-500 flex justify-start'>error </span>
    </div>
    {/* <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-50">Remember me</label>
    </div> */}
    <div className='flex flex-row justify-around'>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    <div className='text-gray-50 p-4 text-sm'>Or <Link className = "rounded p-2 hover:text-slate-400 " to = {'/register'}>SignUp</Link></div>
    </div>
    </form>
</div>

  );
}

export default Login;
  
  // src/components/Register.jsx
  
