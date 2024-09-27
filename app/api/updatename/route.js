import connectDB from '@/lib/db';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();

  const { email, newName } = await req.json();

  // Validate input
  if (!email || !newName) {
    return NextResponse.json({ error: 'Please provide an email and a new name' }, { status: 400 });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Update the user's name
    user.name = newName;
    await user.save();

    return NextResponse.json({ message: 'User name updated successfully', user }, { status: 200 });
  } catch (error) {
    console.error('Error updating user name:', error);
    return NextResponse.json({ error: 'Failed to update user name' }, { status: 500 });
  }
}
