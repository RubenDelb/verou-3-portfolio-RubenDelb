import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from  'react-icons/hi';
import { motion } from 'framer-motion'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#top"><img src={images.logo} alt="logo" /></a>
      </div>
      <ul className="app__navbar-links">
        {/* Create a link to every section on the page */}
        {['home', 'about', 'work', 'skills', 'contact' ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {/* Hamburger-menu icon */}
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          {/* if 'toggle' is true, the element right after && will appear in the output */}
          { toggle && (
            <motion.div 
              whileInView={{ y: [-100,0], x: [300,0], opacity: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut"}}>
                {/* X-icon to close the menu */}
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact' ].map((item) => (
                  <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                  ))}
                </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar