import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import StoryTime from './components/storyTime';


class App extends Component {
  render() {
    return (
      <div>
         <NavBar/>
        <header className="center ">
          <h1 className="red-text text-darken-3">Hands on Express 1</h1>
        </header>
        <StoryTime />
      </div>
    );
  }
}

export default App;
