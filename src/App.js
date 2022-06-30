import style from './App.module.css';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import Experiences from './Components/Experiences';
function App() {
  return (
    <div className="App">
    <Navbar className={style.Navbar} />
      <Hero />
      <Experiences />
    </div>
  );
}

export default App;
