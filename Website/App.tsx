import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SocialMedia from './components/SocialMedia';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Activities />
      <Registration />
      <Location />
      <Gallery />
      <Values />
      <SocialMedia />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-right" />
    </div>
  );
}
