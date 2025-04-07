import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router'
import axios from 'axios'
import { getBaseURL } from '../utils/baseURL'
import { useNavigate } from 'react-router'

const AdminLogin = () => {

  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(`${getBaseURL()}/api/auth/admin`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const auth = response.data

      if (auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
          localStorage.removeItem('token');
          alert('Session expired. Please log in again.');
          navigate('/')
        }, 3600000) // 1 hour 
      }

      alert('Admin logged in successfully!')
      navigate('/dashboard')

    } catch (error) {
      setMessage('Please provide a valid username and password')
      console.log(error.response.data.message)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>
          Admin Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
            <input
              {...register("username", { required: true })}
              type="text" name='username' id='username' placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password" name='password' id='password' placeholder='Enter your password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
          <div>
            <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none'>Log In</button>
          </div>
        </form>
        <p className='mt-5 text-center text-gray-500 text-xs'>&copy; 2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  )
}

export default AdminLogin