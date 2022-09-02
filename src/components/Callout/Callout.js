import React from 'react';
import styles from './Callout.css';

function Callout ({ heading, enableTheme, enableShadow, enableStretch, children }) {
	let containerStyles = `${styles.callout}`;
	if (enableShadow) {
		containerStyles += ` `;
		containerStyles += `${styles.shadow}`;
	}
	if (enableStretch) {
		containerStyles += ` `;
		containerStyles += `${styles.stretch}`;
	}
	if (enableTheme) {
		containerStyles += ` `;
		containerStyles += `${styles.theme}`;
	}

  	return (
		<section className={containerStyles}>
			<div className={enableTheme ? styles.calloutHeadingThemed : styles.calloutHeading}>
				<h2 className={styles.calloutHeadingText}>{heading}</h2>
			</div>
			{children}
		</section>
  	);
}

export default Callout;
