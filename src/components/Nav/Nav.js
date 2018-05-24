import React from 'react';
import styles from './Nav.css';

const nav = () => {
    return (
        <div className={styles.wrapper}>
            <h4 style={{fontWeight: 'bold', margin: 0}}>Jason Stickel</h4>
            <div className={styles.navLinks}>
                <p>Intro</p>
                <p>What I do</p>
                <p>Who I am</p>
                <p>My Work</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default nav;