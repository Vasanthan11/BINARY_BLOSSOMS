import React from 'react';

const Title = ({ subTitle, title }) => {
    return (
        <div>
            <div className='heading'>
                <h3>{subTitle}</h3>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Title