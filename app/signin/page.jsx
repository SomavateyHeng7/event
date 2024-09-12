"use client"; // This is for Next.js' client-side rendering.
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for handling form submission here, such as an API call.
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                
                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 px-3 py-2 mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                
                {/* Password Input */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 px-3 py-2 mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-slate-600 text-white py-2 px-4 rounded-md font-bold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Login
                </button>
                
                {/* Sign Up Link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-slate-600 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </form>
        </div>
    );
}
