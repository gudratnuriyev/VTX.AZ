import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-electric-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;