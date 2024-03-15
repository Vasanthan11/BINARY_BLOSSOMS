import React from 'react';
import Title from "../common/title/Title";
import AWrapper from './AWrapper';
import { homeAbout } from '../../Data/dummydata';
import './about.css';

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container flexSB">
                    <div className="left row">
                        <img src="./images/aboutpage.png" alt="" />
                    </div>
                    <div className="right row">
                        <Title subTitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
                        <div className="items">
                            {homeAbout.map((val) => (
                                <div key={val.id} className="item flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <AWrapper />
        </>
    )
}

export default AboutCard