import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import History from '../History/History';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import styles from './Page.css';

function Page() {
    return (
        <div className={styles.container}>
            <Header/>
            <Hero/>
            <div className={styles.content}>
                <Intro/>
                <History/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
}

export default Page;
