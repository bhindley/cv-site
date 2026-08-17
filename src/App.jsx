import './index.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <Hero />
      <ThemeToggle />
      <Header />
      <main>
        <div className="container">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
