import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // Fetch all the 'abouts' from sanity-client with a query.
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data) )
  }, [])
  

  return (
    <>
      <h2 className="head-text">
        Programming isn't about  
        <span> What you know </span>
        <br />
        it's about
        <span> What you can figure out</span>
      </h2>

      <div className="app__profiles">
        {/* Create an animated card for each about that exists */}
        { abouts.map((about, index) => (
          <motion.div 
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )) }
      </div>
    </> 
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
    'about',
    "app__whitebg")