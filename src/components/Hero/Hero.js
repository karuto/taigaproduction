import React from 'react';
import styles from './Hero.css';
import hero from '../../assets/hero-min.jpg';

function Hero () {
    return (
		<div style={{backgroundImage: `url('dist/${hero}')`}} className={styles.container}>
			<div className={styles.overlay}>
				<h2 className={styles.slogan}>
					A cosplay influencer management agency that focuses on <i>YOU</i>.
				</h2>
			</div>
		</div>
    );
}

export default Hero;
