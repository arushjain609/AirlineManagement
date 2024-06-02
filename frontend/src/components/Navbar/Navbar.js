import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-gradient-to-r fixed items-center px-5 from-purple-600 to-pink-500 h-[4.5vw] flex flex-row'>
      <div className='ml-36 flex flex-col'>
        <h1 className='text-white text-2xl leading-none font-semibold'>SkyShip</h1>
        <h2 className=' text-amber-200 text-2xl font-semibold ml-3'>Flights</h2>
      </div>  
     <img src={logo} className='h-14 w-14 rounded-full'/>  
     <Link className='ml-10 text-blue-500' to="/">
     <button className='self-end mb-1 ml-16 w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Home</button></Link>
     <Link className='ml-10 text-blue-500' to="/Login">
     <button className='self-end mb-1 ml-[37vw] w-24 h-10 text-white text-lg text-semibold rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Login</button></Link>
     <Link className='ml-10 text-blue-500' to="/Login">
     <button className='self-end mb-1 ml-6 text-white text-lg text-semibold w-36 h-10 rounded-3xl bg-white bg-opacity-10 shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Customer Care</button></Link>
    </div>
  )
}

export default Navbar
