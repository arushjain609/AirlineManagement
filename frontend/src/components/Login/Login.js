import React from 'react'
import flight from './flight.jpg'
import user from './user.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
const Login = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusp, setIsFocusp] = useState(false);  
    const input1=useRef()
    const input2=useRef()
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row items-center justify-center ">
      <div className="h-[75vh] w-[70vw] bg-white rounded-[2rem] shadow-2xl shadow-black flex  p-3">
          <img src={flight} className='h-full w-[28rem] rounded-l-3xl'/>
          <div className='h-full w-[22rem] ml-28 rounded-r-3xl flex flex-col justify-center items-center '>
                <h1 className=' text-5xl mb-7'>Login!</h1>
                <img src={user} className='rounded-full h-20 w-20 mb-8'/>
                <div className='flex flex-col h-16 mb-4 justify-center items-center'>
                <label onClick={()=>{input1.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocus ? 'ml-4 mb-10  bg-white  text-xs':''}`}>Enter mail</label>
                <input ref={input1}className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center'>
                <label onClick={()=>{input2.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusp ? 'ml-4  bg-white mb-10 text-xs':''}`}>Enter password</label>
                <input ref={input2} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusp(true)}} onBlur={()=>{setIsFocusp(false)}}></input>
                </div> 
                <div className='flex text-md text-gray-600 ml-5 self-start'>Don't have an account? <Link className='ml-10 text-blue-500' to="/SignIn">Sign Up</Link></div>   
          </div>
      </div>
    </div>
  )
}

export default Login
