import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import api from '../API/api.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Navbar = () => {
  const navigate=useNavigate()
  const [h,setH] = useState('')

useEffect(()=>{
  const token=localStorage.getItem('token')
  if(!token){
    setH('')
    
  }else{
    api.get("/logged",{
      headers: {
        Authorization:token
      }
    }).then((res)=>{
      
      if(res.data.success){
          setH(res.data.username)
          
      }else{
        localStorage.removeItem('token')
      setH('')
      
      }
    }).catch((err)=>{
      localStorage.removeItem('token')
      setH('')
      
    })}
},[])
  const handleLog=()=>{
    const token=localStorage.getItem('token')
  if(!token){
    setH('')
    navigate("/login")
  }else{
    api.get("/logged",{
      headers: {
        Authorization:token
      }
    }).then((res)=>{
      
      if(res.data.success){
          setH(res.data.username)
          navigate("/profile")
      }else{
        localStorage.removeItem('token')
      setH('')
      navigate("/login")
      }
    }).catch((err)=>{
      localStorage.removeItem('token')
      setH('')
      navigate("/login")
    })}

    
  }

  return (
    <div className='w-full fixed bg-gradient-to-r items-center px-5 from-purple-600 to-pink-500 h-[4.5vw] flex flex-row'>
      <div className='ml-36 flex flex-col'>
        <h1 className='text-white text-2xl leading-none font-semibold'>SkyShip</h1>
        <h2 className=' text-amber-200 text-2xl font-semibold ml-3'>Flights</h2>
      </div>  
     <img src={logo} className='h-14 w-14 rounded-full'/>  
     <Link className='ml-10 text-blue-500' to="/">
     <button className='self-end mb-1 ml-16 w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Home</button></Link>
     { !h&&<Link className='ml-10 text-blue-500' to="/Login">
     <button className='self-end mb-1 ml-[37vw] w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Login</button></Link>}
    { h&&
     <button onClick={()=>{handleLog()}} className='self-end mb-4 ml-[37vw] w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>{h}</button>}
     <Link className='ml-10 text-blue-500' to="/Login">
     <button className='self-end mb-1 ml-6 text-white text-lg text-semibold w-36 h-10 rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Customer Care</button></Link>
    </div>
  )
}

export default Navbar
