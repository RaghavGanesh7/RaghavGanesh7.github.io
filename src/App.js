import './App.css';
import './index.css';
import  Feed from "./components/Feed";
import Nav from './components/Nav';
import Experience from './components/Experience';
import SocialMedia from './components/Footer';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
        <Experience />
        <Projects />
        <Achievements />
        {/* <SocialMedia /> */}
      </main>
      {/* <Feed/> */}
      
    </div>
  );
}

export default App;
