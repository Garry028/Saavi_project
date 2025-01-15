import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Hotels from '@/pages/Hotels';
import Booking from '@/pages/Booking';
import Events from '@/pages/Events';
import Gallery from '@/pages/Gallery';
import Promotions from '@/pages/Promotions';
import Career from '@/pages/Career';
import Contact from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hotel-theme">
    
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
