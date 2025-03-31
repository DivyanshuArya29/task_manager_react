import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    
  return (
    <div className='bg-[#1c1c1c] flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
            <form
            onSubmit={(e) =>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='text-xl outline-none border-2 border-emerald-600 py-4 px-5 rounded-full' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='text-xl outline-none border-2 border-emerald-600 py-4 px-5 rounded-full mt-5' type="password" placeholder='Enter password'/>
                <button className='text-xl outline-none  bg-emerald-600 py-4 px-5 rounded-full mt-5' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login