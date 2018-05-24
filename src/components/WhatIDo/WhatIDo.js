import React from 'react';

import WhenInView from '../../containers/Waypoint/Waypoint';
import BottomArrow from '../BottomArrow/BottomArrow';
import styles from './WhatIDo.css';

const whatIDo = props => {
    return (
        <div className={styles.wrapper}>
            <WhenInView>
                {({ isInView }) =>
                    <div className={styles.box} hide={!isInView}>
                        <h3>What I do</h3>
                        <p style={{marginBottom: 22}}>I build websites in JavaScript, Angular, Node, HTML, and CSS and love every minute of it. In fact, I am learning React right now, and I built this portfolio in it!</p>
                        <p>See my resume <a href="https://docs.google.com/document/d/1Z7g110_CEXv1EFnLAgH1xA6-DzFe2A5GAPvebiCKbcM/edit?usp=sharing"><span>here</span></a>.</p>
                    </div>
                }
            </WhenInView>
            <BottomArrow />
        </div>
    );
};

export default whatIDo;