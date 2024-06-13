import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleLoginClick = async (event) => {
      event.preventDefault();
      try {
      const response = await fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/ADMIN/Auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, pass : password }),
      });

      const data = await response.json();
      if (response.ok) {
          if (data.Auth == "True") {
          navigate('/admin-dashboard');
        } else {
          alert("Wrong credentials");
        }
        
        
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Admin Login</h1>
      <form className='flex flex-col gap-4' onSubmit={handleLoginClick}>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='pass'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign In
        </button>
      </form>
    </div>
  );
}