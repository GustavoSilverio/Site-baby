import React from 'react';

import './tanto.css';
import "../../../node_modules/video-react/dist/video-react.css";

const Tanto = () => {
    return (
        <div className="tanto">
            <h1 className='title-t'>Um vídeozinho especial que preparei para a senhorita!</h1>
            <div className="video-d">
                <a href="https://www.youtube.com/watch?v=67NOB5xYGWI" target="_blank" rel='noreferrer'><div className="video">
                    <h1>VER VIDEOZINHO</h1>
                </div></a>
            </div>
        </div>
    );
}

export default Tanto;