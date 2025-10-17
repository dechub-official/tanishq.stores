import React, { useState, useEffect } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from './component/navbar';
import Footer from './component/footer';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import FestiveBanner from './component/animatedStrip';

const queryClient = new QueryClient();

function App() {
  // 🪔 Define all events with start and end times
  const events = React.useMemo(() => [
    {
      name: "Shubh Muhurat",
      start: new Date(2025, 9, 17, 7, 30, 0),   // Oct 18, 2025 - 07:30 AM
      end: new Date(2025, 9, 18, 13, 29, 59),   // Oct 18, 2025 - 01:29 PM
      messages: ["Shubh Muhurat has started"],
    },
    {
      name: "Laabh Muhurat (Afternoon)",
      start: new Date(2025, 9, 18, 13, 30, 0),  // 01:30 PM
      end: new Date(2025, 9, 18, 14, 59, 59),   // 02:59 PM
      messages: ["Laabh Muhurat has started"],
    },
    {
      name: "Amrut Muhurat (Evening)",
      start: new Date(2025, 9, 18, 15, 0, 0),   // 03:00 PM
      end: new Date(2025, 9, 18, 17, 59, 59),   // 05:59 PM
      messages: ["Amrut Muhurat has begun"],
    },
    {
      name: "Laabh Muhurat (Evening)",
      start: new Date(2025, 9, 18, 18, 0, 0),   // 06:00 PM
      end: new Date(2025, 9, 18, 20, 59, 59),   // 08:59 PM
      messages: ["Laabh Muhurat has started"],
    },
    {
      name: "Shubh Muhurat (Night)",
      start: new Date(2025, 9, 18, 21, 0, 0),   // 09:00 PM
      end: new Date(2025, 9, 18, 22, 29, 59),   // 10:29 PM
      messages: ["Shubh Muhurat has started"],
    },
    {
      name: "Amrut Muhurat (Late Night)",
      start: new Date(2025, 9, 18, 22, 30, 0),  // 10:30 PM
      end: new Date(2025, 9, 19, 0, 0, 0),      // 12:00 AM (midnight)
      messages: ["Amrut Muhurat has begun"],
    },
    {
      name: "Festive Offer",
      start: new Date(2025, 9, 19, 0, 1, 0),    // Oct 19, 2025 - 12:01 AM
      end: new Date(2025, 9, 19, 23, 59, 59),   // Oct 19, 2025 - 11:59 PM
      messages: ["Festive offer is Live"],
    },
  ]
    , []);

  const [bannerMessages, setBannerMessages] = useState([]);

  useEffect(() => {
    const updateBannerMessages = () => {
      const now = new Date();

      // Find current active event
      const currentEvent = events.find(
        event => event.start <= now && event.end >= now
      );

      let messagesToShow = [];

      if (currentEvent) {
        // Currently active event
        messagesToShow = currentEvent.messages;
      } else {
        // If no current event → show next upcoming
        const upcoming = events.find(event => event.start > now);
        if (upcoming) {
          messagesToShow = upcoming.messages;
        } else {
          // All events are over → show last event’s messages
          messagesToShow = events[events.length - 1].messages;
        }
      }

      setBannerMessages(messagesToShow);
    };

    // Run immediately
    updateBannerMessages();

    // Check every 30 seconds
    const intervalId = setInterval(updateBannerMessages, 30000);

    return () => clearInterval(intervalId);
  }, [events]);

  return (
    <>
      <FestiveBanner messages={bannerMessages} />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename='/'>
          <NavBar />
          <Routing />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
