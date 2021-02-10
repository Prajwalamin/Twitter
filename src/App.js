import React from 'react';
import Sidebar from './sidebar';
import Feed from './feed';
import Widgets from './widgets';
import './App.css';



const App = () => {
  return (
    <div className="App">

      {/* Sidebar */}

      <Sidebar/>

      {/* Feed */}

      <Feed/>
  
      {/* Widgets */}

      <Widgets/>
    </div>
  )
}

export default App
