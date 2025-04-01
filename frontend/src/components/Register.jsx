import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext';

const Register = () => {

  const [message, setMessage] = useState('')

  const { registerUser, signInWithGoogle } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    try {
      await registerUser(data.email, data.password)
      alert('User registered successfully!')
      navigate('/')
    } catch (error) {
      setMessage('Please provide a valid email and password')
      console.log(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert('User logged in successfully!');
      navigate('/');
    } catch (error) {
      alert('Google sign in failed!');
      console.log(error.message);
    }
  }

  return (
    <div>

      <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h2 className='text-xl font-semibold mb-4'>
            Please Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                type="email" name='email' id='email' placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                type="password" name='password' id='password' placeholder='Enter your password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            {/* {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>} */}
            <div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none'>Sign Up</button>
            </div>
          </form>
          <p className='align-baseline font-medium mt-4 text-sm'>Already have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Log In</Link></p>
          {/* Google Sign In */}
          <div className='mt-4'>
            <button
              onClick={handleGoogleSignIn}
              className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
              <FaGoogle className='mr-2' /> Sign In with Google
            </button>
          </div>
          <p className='mt-5 text-center text-gray-500 text-xs'>&copy; 2025 Book Store. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Register