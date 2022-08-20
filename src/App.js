import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import NavBar from './components/NavBar';




function App() {
  return (

    <div className="App">
      <Container>
      <NavBar />

      </Container>
      
    </div>
   
  );
}

export default App;
