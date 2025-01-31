import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Admin Login</h1>
      <form className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign In</button>
      </form>
    </div>
  )
}