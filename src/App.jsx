import Navbar from '../src/Components/Navbar';
import Hero from '../src/Components/Hero';
import Card from '../src/Components/Card';
import Highlights from '../src/Components/Highlights';
import HowToInstall from './Components/HowToInstall';
import Donate from '../src/Components/Donate'
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Card />
      <Highlights />
      <HowToInstall />
      <Donate />
      <Reviews />
      <Footer />
    </div>
  );
}