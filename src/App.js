import style from './App.module.css';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="App">
    <Navbar className={style.Navbar} />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
