import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
