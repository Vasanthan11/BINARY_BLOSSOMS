import React, { useState, useEffect } from 'react';
import Head from './Head';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {

    const [click, setClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <Head />
            <header className={isScrolled ? 'fixed' : ''}>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB flex3"} onClick={() => setClick(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/team'>Team</Link>
                        </li>

                        <li>
                            <Link to='/blog'>Blogs</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <div className='start'>
                        <div className='button'>GET CERTIFICATE</div>
                    </div>

                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header