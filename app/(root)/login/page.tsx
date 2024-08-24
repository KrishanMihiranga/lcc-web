"use client";

import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-screen'>
                <input type="text" className='border border-black' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br />
                <input type="text" className='border border-black' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
                <Link href={`/user/${username}`} className=' bg-green-500 text-white px-20 py-5'>Login</Link>
            </div>
        </>
    );
};

export default LoginPage;
