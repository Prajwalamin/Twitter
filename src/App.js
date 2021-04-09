import React, { useState } from 'react';
import Sidebar from './sidebar';
import Feed from './feed';
import Widgets from './widgets';
import firebase from "firebase/app"
import './App.css';
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { Button } from '@material-ui/core';

function App() {

  const [user] = useAuthState(auth);

  if(user){
    
    
  return (
    <div className="App">  

      <Sidebar/>

      <Feed/> 

      <Widgets/>
  
      
    </div>
    
  )
}
  return(
    <div className="Sign">
      <div className="image">

    <img src="https://image.freepik.com/free-vector/tweet-layout-twitter_69057-13.jpg" alt="" />
      </div>

    <Sign/>

    </div>
  )
  
  function Sign () {

    

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return(
    <div className="Sign__button">
      <h2 className="Sign__title"> Welcome to Twitter! </h2>
      <div className="Sign__google">
      <img src="https://pngimg.com/uploads/google/google_PNG19635.png" height="50px" width="50px" alt="" />
      <Button  onClick={signInWithGoogle}> Sign-in with google </Button>
      </div>
    </div>
  )
  
  }
  
}

export default App;

