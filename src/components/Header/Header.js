import React from 'react';
import styles from './Header.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
				<div className={styles.brand}>
					{/* <img className={styles.trademark} src={`dist/${trademark}`} /> */}
					<h1 className={styles.name}>Taiga Production</h1>
				</div>
            </div>
        </header>
    );
};

export default Header;
