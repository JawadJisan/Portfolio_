import React from 'react';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';
import Projects from '../src/container/Projects/Projects';
import { Route, Routes } from 'react-router-dom';

/* 
backend command
sanity manage
sanity start

*/

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;