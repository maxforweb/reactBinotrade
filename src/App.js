import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  
import './App.css';
import Header from './components/headerComponents/header.jsx';
import MainFirst from './components/mainFirst/mainFirst.jsx';
import MainSecond from './components/slider/mainSecond.jsx';
import MainThird from './components/mainThird/mainThird.jsx';
import MainFourth from './components/mainfourth/mainFourth.jsx';
import MainFifth from './components/mainFifth/mainFifth.jsx';
import Footer from './components/footer/footer.jsx';
import Registration from './components/registration/regictration.jsx';



function App() {

  return (
    <BrowserRouter>
      <div className={'app-container'}>
        <Header  />
        <Route path='//' component={MainFirst} />
        <Route path='//' component={MainSecond} />
        <Route path='//' component={MainThird} />
        <Route path='//' component={MainFourth} />
        <Route path='//' component={MainFifth} />
        <Route path="/traders" component={MainSecond}/>
        <Route path="/about" component = {MainThird}/>
        <Route path="/about" component = {MainFourth}/>
        <Route path="/about" component = {MainFifth}/>
        <Route path="/sign-up" component={Registration} />
        <Footer />
      </div>
    </BrowserRouter>
    ) 
  }

export default App;
