import React from 'react';
import './hero.css';
import Title from '../../common/title/Title'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subTitle='WELCOME TO BINARY BLOSSOMS' title='Best Online Education' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus pariatur consequuntur rem ipsa aperiam accusantium recusandae, quibusdam corrupti! Nesciunt minus obcaecati suscipit aliquid et modi quibusdam. Velit, ratione officiis.</p>
                        <div className="button">
                            <button className="primary-btn">
                                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Hero