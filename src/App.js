import React from 'react';
import { useState } from 'react';
import './App.css';
import './Sidebar.css';

import Header from './components/header/Header';
import Home from './components/home/Home';

import cx from 'classnames';

function App() {
  const [toggle, setToggle] = useState(false);

  const classes = cx(
    'pusher',
    'bottom',
    { 'dimmed': toggle }
  );

  const toggleMenu = () => {
    setToggle(!toggle)
  };

  const semantics = cx(
    'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
    { 'visible': toggle }
  )

  return (
    <div className="App">
      <Header onToggleMenu={toggleMenu} />

      <div className='ui attached pushable' >
        <div className={semantics}>
          <ul>
            <li className='item link'>-----</li>
            <li className='item link'>-----</li>
            <li className='item link'>About Me</li>
            <li className='item link'>Projects</li>
            <li className='item link'>Accomplishments</li>
            <li className='item link'>Interests</li>
            <li className='item link'>Family Life</li>
          </ul>
        </div>
        <div className={classes}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
