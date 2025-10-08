import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from './component/navbar';
import Footer from './component/footer';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import ReactGa from 'react-ga4';
import { Tracking_Id } from './shared/config';
// I'm assuming you renamed CountdownStrip to FestivalCountdown
import FestivalCountdown from './component/animatedStrip';

ReactGa.initialize(Tracking_Id);

// Create a client
const queryClient = new QueryClient();

function App() {

  const events = [
    {
      name: "Dhanteras",

      date: new Date(2025, 9, 18, 11, 36, 0),
      celebrationMessage: "May your life sparkle with prosperity. Happy {eventName}!"
    },
    {
      name: "Diwali",
      date: new Date(2025, 9, 31, 19, 0, 0),
      celebrationMessage: "Illuminate your celebrations with our festive collection."
    },
    {
      name: "Bhai Dooj",
      date: new Date(2025, 10, 2, 10, 0, 0), // 10 = November
      celebrationMessage: "Celebrate the cherished bond of {eventName}."
    },
  ];

  return (
    <>
      {/* <FestivalCountdown events={events} /> */}
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