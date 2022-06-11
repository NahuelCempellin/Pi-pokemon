import './App.css';
import Home from './components/home/home';
import { useState } from 'react';
import LandingPage from './components/landing/landing';
import {Route,Routes} from 'react-router-dom';
import PokeDex from './components/detail/detail';
import Form from './components/form/form';
import NavBar from './components/navbar/nav/navbar';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/pokemon' element={<Home/>}/>
      <Route exact path='/pokemon/:id' element={<PokeDex/>}/>
      <Route exact path='/pokemon/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
