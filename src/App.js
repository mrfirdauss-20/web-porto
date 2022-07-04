import style from './App.module.css';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <Navbar className={style.Navbar} />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
