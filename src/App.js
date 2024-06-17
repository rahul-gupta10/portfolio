
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
