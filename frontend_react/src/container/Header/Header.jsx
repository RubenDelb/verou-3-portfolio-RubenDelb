import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: { 
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">

      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" style={{ height: '90%' }}/> 
      </motion.div>

      <motion.div 
        whileInView={{ x: [-150, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <img className="app__image-bubble" src={images.speechBubble} alt="" />
            <div style={{ marginLeft: 20 }}>
              <p className="bg-text"> I am </p>
              <h1 className="head-text" style={{ color: '#005C7B'}}>Ruben</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text" style={{ textAlign: 'left' }}><i>Junior</i></p>
            <p className="p-text">Full Stack Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={scaleVariants.whileInView} // Used a variable to set a lot of properties
        className="app__header-circles"
      >
        { [images.html, images.react, images.sass].map((circle, index) => (
          <motion.div 
            className="circle-cmp app__flex" 
            key={`circle-${index}`}
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            dragElastic={0.7}
            whileTap={{ cursor: "grabbing" }}
            >
            <img src={circle} alt="" />
          </motion.div>
        )) }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');