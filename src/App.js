import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages imports
import MainPage from './pages/MainPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

//Component import
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/home' element={ <MainPage /> } />
          <Route path='/home/projects' element={ <Portfolio /> } />
          <Route path='/home/contact' element={ <Contact /> } />
        </Routes>
      <Footer />
    </div>
      
    </BrowserRouter>
  );
}

export default App;
