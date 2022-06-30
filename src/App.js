import style from './App.module.css';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
function App() {
  return (
    <div className="App">
    <Navbar className={style.Navbar} />
      <Hero />
    </div>
  );
}

export default App;
