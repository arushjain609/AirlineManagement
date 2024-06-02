import React, { useRef } from 'react'
import user from './user.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SignIn = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusu, setIsFocusu] = useState(false);  
    const [isFocusp, setIsFocusp] = useState(false);   
    const [isFocusn, setIsFocusn] = useState(false);  
    const input1=useRef()
    const input2=useRef()
    const input3=useRef()
    const input4=useRef()
  return (
    <div>
      <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row items-center justify-center ">
      <div className="h-[80vh] w-[40vw] bg-white rounded-[2rem] shadow-2xl shadow-black flex flex-col items-center  py-5 px-3">
           <h1 className=' text-5xl mb-7'>SignIn!</h1>
           <img src={user} className='rounded-full h-20 w-20 mb-8'/>
                <div className='flex flex-col h-16 mb-2 justify-center items-center'>
                <label onClick={()=>{input1.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocus ? 'ml-4 mb-10  bg-white  text-xs':''}`}>Enter mail</label>
                <input ref={input1} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false)}}></input>
                </div>
                <div className='flex flex-col h-16 mb-2 justify-center items-center'>
                <label onClick={()=>{input2.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusu ? 'ml-4 mb-10  bg-white  text-xs':''}`}>Choose a User name</label>
                <input ref={input2} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusu(true)}} onBlur={()=>{setIsFocusu(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center' >
                <label onClick={()=>{input3.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusp ? 'ml-4  bg-white mb-10 text-xs':''}`}>Create password</label>
                <input ref={input3} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusp(true)}} onBlur={()=>{setIsFocusp(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center'>
                <label onClick={()=>{input4.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusn ? 'ml-4  bg-white mb-10 text-xs':''}`}>Re-enter password</label>
                <input ref={input4} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusn(true)}} onBlur={()=>{setIsFocusn(false)}}></input>
                </div>
                <div className='flex text-md text-gray-600 self-center'>Already have an account? <Link className='ml-10 text-blue-500' to="/Login">Login</Link></div>
      </div>
      </div>
    </div>
  )
}

export default SignIn
