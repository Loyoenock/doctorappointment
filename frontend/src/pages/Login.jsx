import React, { useState } from 'react'

const Login = () => {
  
  const [state, setState] = useState('sign up');

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>  
      <div className='flex flex-col gap-3 m-auto items-start p-8 min:w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {
            state === 'sign up' ? 'Create Account' : 'Login'
          }
          </p>
          <p>
            Please {state === 'sign up' ? 'sign up' : 'log in'} to book an appointment
          </p>
          {
            state === 'sign up' && <div className='w-full'>
            <p>Full Name</p>
            <input type='text' onChange={(e) => setName(e.target.name)} value={name} required className='border border-zinc-300 rounded w-full p-2 mt-1'/>
          </div>
          }
          
          <div className='w-full'>
            <p>Email</p>
            <input type='email' onChange={(e) => setEmail(e.target.name)} value={email} required className='border border-zinc-300 rounded w-full p-2 mt-1'/>
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input type='password' onChange={(e) => setPassword(e.target.name)} value={password} required className='border border-zinc-300 rounded w-full p-2 mt-1'/>
          </div>
          <button className='bg-primary text-white w-full rounded-md text-base py-2'>
          {
            state === 'sign up' ? 'Create Account' : 'Login'
          }
          </button>
          {
            state === 'sign up' ? 
            <p> Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login Here</span> </p> :
            <p> Don't have an account? <span onClick={() => setState('sign up')} className='text-primary underline cursor-pointer'>Sign Up Here</span> </p>
          }
      </div> 
      
    </form>
  )
}

export default Login