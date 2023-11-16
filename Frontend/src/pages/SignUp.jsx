import { set } from 'mongoose';
import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formdata,setformdata]=useState();
  const [err,seterr]=useState();
  const [loading,setLoading]=useState();
  const navigate=useNavigate();
  
  const handleInput=(e)=>{
    setformdata({
      ...formdata,
      [e.target.id]:e.target.value
    });
  }

const onSubmit=async (e)=>{
  
  e.preventDefault();
  setLoading(true)
  try{
  const res= await fetch ("/api/user/signup ",
  {
    method:'post',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formdata)
  
  });

  if(res.ok){
      const data=await res.json();
      seterr('')
      if(data.success===false){
        setLoading(false)
        seterr(data.message)
       }
      else{
         navigate("/sign-in")
      }
    }
    else{
        setLoading(false)
        seterr("Something went wrong")
    }
  }
 catch (error) {
  setLoading(false)
  seterr("Something went wrong")

}



}

  return (
  
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>
            SignUp
        </h1>
        <form className='flex flex-col gap-4'>
            <input  className='rounded-lg p-3 border' type='text' id="username" onChange={handleInput} placeholder= 'Username' />
            <input className='rounded-lg p-3 border'type='email' id="email" onChange={handleInput} placeholder='Email'/>
            <input className='rounded-lg p-3 border'type='password' id="password" onChange={handleInput} placeholder='Password'/>
            <button  disabled={loading} className='bg-slate-700 rounded-lg text-center p-3 text-white uppercase hover:opacity-95 hover:ring' onClick={onSubmit}>{loading ? 'Loading':'SignUp'}</button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Have an account ?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-500'>Sign In</span>
          </Link>
        </div>
        <div className='flex gap-2'>
          <p className='text-red-500'>{err}</p>
        </div>
    </div>
  )
}
