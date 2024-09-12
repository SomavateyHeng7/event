"use client";
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your sign-up logic here, e.g., API call
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-96 mx-auto mt-10">
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-4"
            >
                Sign Up
            </Button>
        </form>
    );
}
