import React from 'react';
import './App.css';
import Friends from './components/Friends';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
        <Users/>
        <Friends/>
        <Posts/>
    </div>
  );
}

export default App;
