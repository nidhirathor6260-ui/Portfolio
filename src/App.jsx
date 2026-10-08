import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hackathons from './sections/Hackathons';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <LazyMotion features={domAnimation} strict>
      {/* reducedMotion="user": people who ask their OS for less motion get no movement */}
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <Hackathons />
          <Education />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
