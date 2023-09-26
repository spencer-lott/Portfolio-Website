import { useRef, useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

import cx from 'classnames'

// export const mainRef = useRef(null);
// export const aboutRef = useRef(null);
// export const projectsRef = useRef(null);

// export const scrollToMain = () => mainRef.current.scrollIntoView({ behavior: "smooth" });
// export const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
// export const scrollToContact = () => projectsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

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

      <div className='ui attached pushable' >
        <Sidebar toggleMenu={toggle} />
          <div className={classes}>
            <Home />
          </div>
      </div>
</div>
  );
}

export default App;
