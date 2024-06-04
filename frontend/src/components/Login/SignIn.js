import React, { useRef } from 'react'
import user from './user.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../API/api.js'
import Navbar from '../Navbar/Navbar.js'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusu, setIsFocusu] = useState(false);  
    const [isFocusp, setIsFocusp] = useState(false);   
    const [isFocusn, setIsFocusn] = useState(false);  
    const [userName,setUserName]=useState('')
    const [userPass,setUserPass]=useState('') 
    const [userRePass,setUserRePass]=useState('') 
    const [userMail,setUserMail]=useState('')
    const navigate=useNavigate()
    const input1=useRef()
    const input2=useRef()
    const input3=useRef()
    const input4=useRef()
    const handleChange=(e,s)=>{
      if(s==='n'){
        setUserName(e.target.value)
      }
      if(s==='rp'){
        setUserRePass(e.target.value)
      }
      if(s==='p'){
        setUserPass(e.target.value)
      }
      if(s==='m'){
        setUserMail(e.target.value)
      }
  
  
    }
    const handleSubmit=(e)=>{
    
      e.preventDefault()
      api.post('/api/user/register',{
          email:userMail,
          username:userName,
          password:userPass
      },{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if(response.data.success){
          localStorage.setItem('token',response.data.token)
          navigate("/")
          
        }
      }).catch(err=>{
        window.alert('Something went wrong! Try again with correct credentials')
      })
           
}
  return (
    <div>
      <Navbar/>
      <div className='h-[4.2rem]'></div>
      <div className="h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row items-center justify-center ">
      <form onSubmit={(e)=>handleSubmit(e)} className="h-[80vh] w-[40vw] bg-white rounded-[2rem] shadow-2xl shadow-black flex flex-col items-center  py-5 px-3">
           <h1 className=' text-5xl mb-7'>SignIn!</h1>
           <img src={user} className='rounded-full h-20 w-20 mb-8'/>
                <div className='flex flex-col h-16 mb-2 justify-center items-center'>
                <label onClick={()=>{input1.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocus||userMail ? 'ml-4 mb-10  bg-white  text-xs':''}`}>Enter mail</label>
                <input ref={input1} value={userMail} onChange={(e)=>{handleChange(e,'m')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false)}}></input>
                </div>
                <div className='flex flex-col h-16 mb-2 justify-center items-center'>
                <label onClick={()=>{input2.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusu||userName ? 'ml-4 mb-10  bg-white  text-xs':''}`}>Choose a User name</label>
                <input ref={input2} value={userName} onChange={(e)=>{handleChange(e,'n')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusu(true)}} onBlur={()=>{setIsFocusu(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center' >
                <label onClick={()=>{input3.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusp||userPass ? 'ml-4  bg-white mb-10 text-xs':''}`}>Create password</label>
                <input ref={input3} type='password' value={userPass} onChange={(e)=>{handleChange(e,'p')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusp(true)}} onBlur={()=>{setIsFocusp(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center'>
                <label onClick={()=>{input4.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusn||userRePass ? 'ml-4  bg-white mb-10 text-xs':''}`}>Re-enter password</label>
                <input type='password' ref={input4} value={userRePass} onChange={(e)=>{handleChange(e,'rp')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]' onFocus={()=>{setIsFocusn(true)}} onBlur={()=>{setIsFocusn(false)}}></input>
                </div>
                <button type='submit' className='w-28 text-white mt-2 mb-2 self-center bg-blue-700 h-10 rounded-3xl hover:scale-110 hover:bg-brightness-75 ' >Register</button>
                <div className='flex text-md text-gray-600 self-center'>Already have an account? <Link className='ml-10 text-blue-500' to="/Login">Login</Link></div>
      </form>
      </div>
    </div>
  )
}

export default SignIn
