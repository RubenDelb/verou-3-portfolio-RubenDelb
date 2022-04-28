import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { title: 'Backend', description: 'I love to work with data and optimize performance', imgUrl: images.about02 },
//   { title: 'Frontend', description: 'It\'s so pleasing to see code come to life', imgUrl: images.about03 },
//   { title: 'Full Stack', description: 'Making the communication between front & backend is the best feeling in the world!', imgUrl: images.about01 },
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data) )
  }, [])
  

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
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