"use client";
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

export default function HomePage() {
    const [events, setEvents] = useState([
        { id: 1, title: 'Tech Conference 2024', date: '2024-09-20', description: 'A conference about the latest in technology.' },
        { id: 2, title: 'Web Development Bootcamp', date: '2024-10-05', description: 'Learn web development from scratch.' },
        { id: 3, title: 'AI & Machine Learning Summit', date: '2024-11-15', description: 'An event focusing on AI and Machine Learning.' },
        { id: 4, title: 'Startup Pitch Competition', date: '2024-12-01', description: 'Compete and pitch your startup idea to investors.' },
    ]);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Welcome to the Event Management Portal
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Discover and Join Exciting Events!
            </Typography>

            <Grid container spacing={4} className="mt-8">
                {events.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <Card className="shadow-lg">
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {event.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    Date: {event.date}
                                </Typography>
                                <Typography variant="body2" component="p" className="mt-4">
                                    {event.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="mt-4"
                                    onClick={() => alert(`Viewing details for ${event.title}`)}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
