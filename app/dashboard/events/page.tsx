"use client";

import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { PlusIcon } from "lucide-react";

export default function EventList() {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: "/images/logo.png",
      title: "Tech Conference 2024",
      date: "2024-09-20",
      description: "A conference about the latest in technology.",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "2024-10-05",
      description: "Learn web development from scratch.",
    },
    {
      id: 3,
      title: "AI & Machine Learning Summit",
      date: "2024-11-15",
      description: "An event focusing on AI and Machine Learning.",
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 7,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 8,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 9,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 10,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 11,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
    {
      id: 12,
      title: "Startup Pitch Competition",
      date: "2024-12-01",
      description: "Compete and pitch your startup idea to investors.",
    },
  ]);

  return (
    <div>
      <Sidebar />
      <main className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Events</h1>
          <Link href="/dashboard/events/createevent">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <PlusIcon className="w-5 h-5 mr-2" />
              Create Event
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/dashboard/eventdetails/${event.id}`}
              className="bg-white shadow-lg p-6 rounded-lg block hover:bg-gray-100"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={event.image || "/images/logo.png"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-500 mb-4">Date: {event.date}</p>
              <p className="text-gray-700 mb-4 truncate">{event.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}