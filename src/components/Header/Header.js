import React from 'react';
import styles from './Header.css';
import trademark from '../../assets/trademark.png';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
				<div className={styles.brand}>
					<img className={styles.trademark} src={`dist/${trademark}`} />
					<h1 className={styles.name}>北京东方华盛</h1>
				</div>
            </div>
        </header>
    );
};

export default Header;
