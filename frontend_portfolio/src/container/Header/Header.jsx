import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';
import { FaFileDownload } from 'react-icons/fa'



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <img src="images/wave.gif" width="80px" alt="" /><br />
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="">Jawad Ibne</h1>
            <h1 className="text" style={{ textAlign: 'center' }} >Rafiq</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">And I'm a</p>
          {/* <p className="p-text">Freelancer</p> */}
        </div>
        <Typewriter
          options={{
            strings: ["Web Developer", "React.js Developer", "MERN stack developer", "Full Stack Developer", "Front-End Developer", "Programmer"],
            typeSpeed: 100,
            backSpeed: 60,
            delay: 75,
            autoStart: true,
            loop: true,
          }}
        />
        
        <div className='app__hired'>
          <span><a href="https://www.linkedin.com/in/jawad-jisan/" target='_blank' >Hire Me</a></span>
          <span className='app__hired-resume'><a href="https://drive.google.com/file/d/1llDBcUspXPWss2jqO9Pxr7w2El9F9GrR/view" target='_blank' ><FaFileDownload 
          style={{marginRight:'8px', paddingTop:'3px' }}
          
          />Resume</a></span>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.mern, images.react, images.redux].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');