import React from 'react';
import styles from './Hero.css';
import hero from '../../assets/oil-field.jpeg';

function Hero () {
    return (
		<div style={{backgroundImage: `url('dist/${hero}')`}} className={styles.container}>
			<div className={styles.overlay}>
				<h2 className={styles.slogan}>
					专注科研创新产品<br/>助力石油行业起飞
				</h2>
			</div>
		</div>
    );
}

export default Hero;
