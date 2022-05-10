import React from 'react';

const DisplayLoader = () => {

    return (
        <div className="backdrop">
            <div className="loader">
                <div className="loader-inner pacman">
                    <div className='pacman-head'></div>
                    <div className='pacman-head'></div>
                    <div className='pacman-food'></div>
                    <div className='pacman-food'></div>
                    <div className='pacman-food'></div>
                </div>
            </div>
        </div>
    );
}

export default DisplayLoader;