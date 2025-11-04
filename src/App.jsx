import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] font-inter">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Contact />
      </main>
    </div>
  );
}
