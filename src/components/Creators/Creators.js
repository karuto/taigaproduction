import React from 'react';
import { Element } from 'react-scroll';
import styles from './Creators.css';
import hime1 from '../../assets/hime-1.jpg';
import hime2 from '../../assets/hime-2.jpg';
import kusa1 from '../../assets/kusa-1.jpg';
import kusa2 from '../../assets/kusa-2.jpg';
import wendy1 from '../../assets/wendy-1.jpg';
import wendy2 from '../../assets/wendy-2.jpg';

function Creators () {
	const igIcon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M338,54.63H174c-62.72,0-114,51.32-114,114V343.33c0,62.72,51.32,114,114,114H338c62.72,0,114-51.32,114-114V168.67C452,105.94,400.68,54.63,338,54.63Zm83.91,288.71A84.24,84.24,0,0,1,338,427.24H174a84.24,84.24,0,0,1-83.91-83.91V168.67A84.24,84.24,0,0,1,174,84.76H338a84.24,84.24,0,0,1,83.91,83.91Z"></path><path d="M255.77,148.18A107.94,107.94,0,1,0,363.71,256.13,107.94,107.94,0,0,0,255.77,148.18Zm-.52,178.71a70.68,70.68,0,1,1,70.68-70.68A70.68,70.68,0,0,1,255.25,326.9Z"></path><circle cx="365.44" cy="146.5" r="25.56"></circle></svg>);
	const creators = [{
		name: 'Wendy',
		link: 'https://www.instagram.com/_wendydydydy/',
		followers: 325,
		img1: `dist/${wendy1}`,
		img2: `dist/${wendy2}`,
	},{
		name: 'Hime',
		link: 'https://www.instagram.com/lovehimeking/',
		followers: 90.2,
		img1: `dist/${hime1}`,
		img2: `dist/${hime2}`,
	},{
		name: 'Kusa',
		link: 'https://www.instagram.com/kusa_cos_/',
		followers: 7.8,
		img1: `dist/${kusa1}`,
		img2: `dist/${kusa2}`,
	}];
	const creatorBlocks = creators.map(c => <div className={styles.creator}>
		<a target='_blank' href={c.link}>
			<div className={styles.creatorinfo}>
				<h3 className={styles.name}>{c.name}</h3>
				<div className={styles.icon}>{igIcon}</div>
			</div>
		</a>
		<div className={styles.creatorimgs}>
			<img className={styles.img} src={c.img1} />
			<img className={styles.img} src={c.img2} />
		</div>
	</div>);

    return (
		<Element name="creators">
			<section className={styles.container}>
				<h2 className={styles.title}>Meet our Creators</h2>
				<div className={styles.creators}>
					{creatorBlocks}
				</div>
			</section>
		</Element>
    );
}

export default Creators;
