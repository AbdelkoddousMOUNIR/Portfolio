import './App.css';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import { appContext } from './context/AppContext';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';


function App() {
  let { mode } = useContext(appContext);
  return (
    <BrowserRouter>
      <div className={`App ${mode ? "darkMode" : ""}`}>
        <NavBar />
        <About />
        <Skills />
        <Certificate />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
