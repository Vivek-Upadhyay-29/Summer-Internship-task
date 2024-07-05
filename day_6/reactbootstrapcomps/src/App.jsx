import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Blog';

import Button from 'react-bootstrap/Button'; // Import specific component

function App() {
  return (
    <div>
      <Button variant="primary">Click me!</Button>
    
    <Blog/>
    </div>
  );
}

export default App;
