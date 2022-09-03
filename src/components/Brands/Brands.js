import React from 'react';
import styles from './Brands.css';
import logoGenshin from '../../assets/logo-genshin.png';
import logoYostar from '../../assets/logo-yostar.png';
import logoArknights from '../../assets/logo-arknights.png';
import logoAzurLane from '../../assets/logo-azur-lane.png';
import logoHonkai3rd from '../../assets/logo-honkai-3rd.png';
import logoHonkaiStarRail from '../../assets/logo-honkai-star-rail.png';

function Brands () {
    return (
		<section className={styles.container}>
			<h2 className={styles.title}>Brands we worked with</h2>
			<div className={styles.brands}>
				<img className={styles.brand} src={`dist/${logoGenshin}`} />
				<img className={styles.brand} src={`dist/${logoYostar}`} />
				<img className={styles.brand} src={`dist/${logoAzurLane}`} />
				<img className={styles.brand} src={`dist/${logoArknights}`} />
				<img className={styles.brand} src={`dist/${logoHonkai3rd}`} />
				<img className={styles.brand} src={`dist/${logoHonkaiStarRail}`} />
			</div>
		</section>
    );
}

export default Brands;
