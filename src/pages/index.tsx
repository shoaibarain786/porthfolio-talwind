import Header from '../pages/Header';
import CursorEffect from './CursoeEffect';
import Herosection from '../pages/HeroSection';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Service from '../pages/Service';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Footer from './Footer';
 // Adjust path if necessary





export default function Home() {
  return (
    <div>
      <CursorEffect/>
      <Header/>
      <Herosection/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}