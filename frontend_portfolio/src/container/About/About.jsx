
/*  const abouts = [
   {title:'Web Development', description: 'I am a good web Developer', imgUrl: images.about01 },
   {title:'Frontend Developnemt', description: 'I am a good web Developer', imgUrl: images.about02 },
   {title:'MERN Stack', description: 'I am a good web Developer', imgUrl: images.about02 },
   {title:'React Developer', description: 'I am a good web Developer', imgUrl: images.about03 },
 ] */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoPrimitiveDot } from 'react-icons/go'
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My services<br /><span>what i do</span></h2>
      {/* <h2 className="head-text">My services<span>Good Design</span> <br />means  <span>Good Business</span></h2> */}

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20, textAlign: 'center' }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              <GoPrimitiveDot /> {about.description}</p>
            <p className="p-text" style={{ marginTop: 10 }}>
              <GoPrimitiveDot />{about?.description1}</p>
            <p className="p-text" style={{ marginTop: 10 }}>
              <GoPrimitiveDot />{about?.description2}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);