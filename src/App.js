import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div id="all">
    <Navbar/>
    <div className="App">
     <h1>HELLO</h1>
     <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
     <Button className="bouton" variant="outlined">Default</Button>
    </div>
    </div>
  );
}

export default App;
