import mongoose from 'mongoose';

// Define the event schema
const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'Event date is required'],
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required'],
  },
  endTime: {
    type: String,
    required: [true, 'End time is required'],
  },
  location: {
    type: String,
    required: function() {
      return this.eventType === 'Venue';
    },
    trim: true,
  },
  price: {
    type: Number,
    default: 0,  // If the event is free, default to 0
  },
  capacity: {
    type: Number,
    required: [true, 'Event capacity is required'],
    min: [0, 'Capacity must be at least 0'],
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  eventType: {
    type: String,
    enum: ['Venue', 'Online', 'TBA'],  // Event can be either Venue, Online, or To Be Announced
    default: 'Venue',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,  // Ensure the event is associated with a user
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set to current date when event is created
  }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Create the Event model from the schema
const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
