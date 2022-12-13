import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'


const AppWrap = (Component, idName, classNames) => function HOC() {


    return (
        <div id={idName} className={`app__container ${classNames} `} >
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright'>
                    <p className='p-text'>Developed By <a
                    target='_blank' href="https://www.linkedin.com/in/jawad-jisan/">@Jawad Jisan</a></p>
                    <p className='p-text'> <span>&copy;</span>  {new Date().getUTCFullYear()} All right reserved</p>
                </div>
            </div>
            <NavigationDots
                active={idName}
            />
        </div>
    )
}

export default AppWrap