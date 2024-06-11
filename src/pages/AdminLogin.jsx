import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/ADMIN/Auth', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.Auth === 'True') {
        navigate('/admin-dashboard', { replace: true });
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error authenticating');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Admin Login</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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
        {error && <div className='text-red-500'>{error}</div>}
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign In
        </button>
      </form>
    </div>
  );
}