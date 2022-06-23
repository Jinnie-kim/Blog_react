import React from 'react';

import Posts from '../../components/Posts/Posts';
import About from '../../components/About/About';

import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="max-width">
                <h2 className='a11y-hidden'>Post</h2>
                <Posts />
                <About />
            </div>
        </main>
    )
}

export default Main;