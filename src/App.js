import React from 'react';
import './App.css';
import Header from './components/headerComponents/header';
import MainFirst from './components/mainFirst/mainFirst';
import MainSecond from './components/slider/mainSecond';
import MainThird from './components/mainThird/mainThird';



function App() {

  return (
    <div className={'app-container'}>
      <Header  />
      <MainFirst  />
      <MainSecond />
      <MainThird />
    </div>
  ) 
}

export default App;
