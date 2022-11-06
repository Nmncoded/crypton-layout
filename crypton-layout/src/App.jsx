import { useState } from 'react'
import { Header } from './components/header/header';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { MainBody } from './components/mainBody';

function App() {
  return (
    <Router>
      <Header />
      <MainBody />
    </Router>
  )
}

export default App
