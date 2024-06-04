import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../API/api'
const Profile = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(!token){
            navigate("/")
        }else{
          api.get('/logged',{
            headers: {
              Authorization:token
            }
          }).then(res=>{
            console.log(res)
            if(res.data.success){
                
            }else{
              localStorage.removeItem('token')
              navigate("/")
            
            }
          }).catch((err)=>{
            localStorage.removeItem('token')
            navigate("/")
            
          })}
      },[])
  return (
    <div>
      hi
    </div>
  )
}

export default Profile
