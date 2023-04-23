import React from 'react';
import styles from './Brands.css';
import logoNikke from '../../assets/logo-nikke.png';
import logoYostar from '../../assets/logo-yostar.png';
import logoArknights from '../../assets/logo-arknights.png';
import logoAzurLane from '../../assets/logo-azur-lane.png';
import logoLevelInfinite from '../../assets/logo-level-infinite.png';
import logoPaper from '../../assets/logo-paper.png';

function Brands () {
    return (
		<section className={styles.container}>
			<h2 className={styles.title}>Brands we worked with</h2>
			<div className={styles.brands}>
				<img className={styles.brand} src={`dist/${logoNikke}`} />
				<img className={styles.brand} src={`dist/${logoYostar}`} />
				<img className={styles.brand} src={`dist/${logoAzurLane}`} />
				<img className={styles.brand} src={`dist/${logoArknights}`} />
				<img className={styles.brand} src={`dist/${logoLevelInfinite}`} />
				<img className={styles.brand} src={`dist/${logoPaper}`} />
			</div>
		</section>
    );
}

export default Brands;
