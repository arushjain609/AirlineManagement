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
    api.get("/logged/company/staff",{
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
  

  return (
    <div className='w-full select-none z-10 fixed bg-gradient-to-r items-center px-5 from-purple-600 to-pink-500 h-[4.5vw] flex flex-row'>
        
      
     <Link className=' w-54 flex flex-row ' to="/Home">
     <div className='ml-32 cursor-pointer flex flex-col'>
        <h1 className='text-white text-2xl leading-none font-semibold'>SkyShip</h1>
        <h2 className=' text-amber-200 text-2xl font-semibold ml-3'>Flights</h2>
        
      </div>
      <img src={logo} className='h-14 w-14 rounded-full'/> </Link>
    
   
     {h&&<button className='self-end mb-4 ml-[47vw] w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>{h}</button>}
     
    </div>
  )
}

export default Navbar
