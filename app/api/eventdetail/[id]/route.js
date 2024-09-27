import connectDB from '@/lib/db';  // Ensure DB is connected
import Event from '@/models/event';  // Import Event model
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  await connectDB();  // Ensure the database is connected

  const { id } = params;  // Extract the event ID from the URL
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid event ID' }, { status: 400 });
  }

  try {
    // Find the event by ID
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Return the event details
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error('Error retrieving event details:', error);
    return NextResponse.json({ error: 'Failed to retrieve event details' }, { status: 500 });
  }
}
