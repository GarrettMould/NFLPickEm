import React from 'react';
import { Header } from './components/Header';
import { CardCarousel } from './components/CardCarousel';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SubmitPicksButton } from './elements/SubmitPicksButton';

function App() {

  const handlePick = () => { 
    
  }
  return (
    <div className={classes.App}>
     <Header/>
     <CardCarousel/>
     <SubmitPicksButton/>
    </div>
  );
}

export default App;
