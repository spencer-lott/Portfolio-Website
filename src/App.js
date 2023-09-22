import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

import cx from 'classnames'

function App() {
  const [toggle, setToggle] = useState(false)

  const classes = cx(
    'pusher',
    'bottom',
    {'dimmed' : toggle}
  )

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <Header onToggleMenu={toggleMenu} />

      <div className='ui attached pushable' style={{height: '100vh'}}>
        <Sidebar toggleMenu={toggle} />
          <div className={classes}>
            <Home />
          </div>
      </div>
</div>
  );
}

export default App;
