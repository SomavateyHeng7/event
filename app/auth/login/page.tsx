'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Lock, LogIn } from "lucide-react"; // Using icons from lucide-react

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      console.log("Signing in with", { email, password });
    } catch (err) {
      setError("Failed to sign in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded shadow-md">
        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/images/logo.png" // Correct path
            alt="Sign In"
            layout="fill"
            objectFit="cover"
            className="rounded-l"
          />
        </div>
        {/* Form Section */}
        <div className="w-full h-full md:w-1/2 p-6 space-y-8">
          <h1 className="text-2xl font-bold text-center text-[#2b5e9f] pt-6">
            Sign In
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 pt-10">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#2b5e9f] hover:bg-[#1565C0] text-white"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
