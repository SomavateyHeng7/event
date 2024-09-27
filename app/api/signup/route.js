import connectDB from '@/lib/db';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();

  const { name, email, password, confirmPassword } = await req.json();

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    return NextResponse.json({ error: 'Please fill in all fields' }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  // Create new user
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
  }
}
