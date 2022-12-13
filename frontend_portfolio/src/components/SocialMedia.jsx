import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            {/* <BsTwitter /> */}
            <a target='_blank' href="https://www.linkedin.com/in/jawad-jisan/"> <BsLinkedin /></a>
        </div>
        <div>
            <a target='_blank' href="https://www.facebook.com/JawadJisan0/"> <FaFacebookF /></a>

        </div>
        <div>
        <a target='_blank' href="https://github.com/JawadJisan"> <BsGithub /></a>

        </div>
    </div>
);

export default SocialMedia;