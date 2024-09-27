'use client';

import Navbar from "@/components/shared/NavBar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export default function HomePage() {
    const [events, setEvents] = useState([
        { id: 1, title: 'Tech Conference 2024', date: '2024-09-20', description: 'A conference about the latest in technology.' },
        { id: 2, title: 'Web Development Bootcamp', date: '2024-10-05', description: 'Learn web development from scratch.' },
        { id: 3, title: 'AI & Machine Learning Summit', date: '2024-11-15', description: 'An event focusing on AI and Machine Learning.' },
        { id: 4, title: 'Startup Pitch Competition', date: '2024-12-01', description: 'Compete and pitch your startup idea to investors.' },
    ]);

    return (
        <div>
            <Navbar />
            <Header />

            <main className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Event Management Portal</h1>
                <p className="text-lg text-center mb-8">Discover and Join Exciting Events!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white shadow-lg p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-500 mb-4">Date: {event.date}</p>
                            <p className="text-gray-700 mb-4">{event.description}</p>
                            <Button onClick={() => alert(`Viewing details for ${event.title}`)} className="w-full">
                                View Details
                            </Button>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
