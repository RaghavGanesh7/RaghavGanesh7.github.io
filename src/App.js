import './App.css';
import  Feed from "./components/Feed";
import Nav from './components/Nav';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <>
          <Nav/>
          <Section1/>
          <Section2/>
          <Feed/>
          <SocialMedia/>
    </>
  );
}

export default App;
