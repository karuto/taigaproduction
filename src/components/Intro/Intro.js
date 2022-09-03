import React from 'react';
import styles from './Intro.css';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import profileImage from '../../assets/taiga-gura.jpg';

/*
*/

function Intro () {
	return (
		<div>
		<section className={styles['container--intro']}>
			<div className={styles['heading--primary']} style={{backgroundImage: `url('dist/${profileImage}')`}}>
				{/* <h2 className={styles.headingtext}>People first,<br/> influencers second</h2> */}
			</div>
			<div className={styles['content']}>
				{/* <div className={styles['profile-image']} style={{backgroundImage: `url('dist/${profileImage}')`}}>
				</div> */}
				{/* <p className={styles['intro--primaryhero']}>
					Hi, I'm Taiga 👋
				</p> */}
				<p className={styles.p}>
					<span className={styles.highlight}>Hi, I'm Taiga 👋</span>a professional cosplayer that has been active in the cosplay community for 12+ years.
				</p>
				<p className={styles.p}>
					I founded Taiga Production to help my family of creator friends grow and excel.
				</p>
				<p className={styles.p}>
					We are small by design.
				</p>
				<p className={styles.p}>
					Because we geniunely care.
				</p>
			</div>
			<div className={styles['action--primary']}>
				{/* <Link activeClass="active" to="history" spy={true} smooth={true} offset={-50} duration={500} className={styles['link--primary']}> */}
					<h4 className={styles.actionText}><a href="https://www.instagram.com/taiga765">Reach out ➡</a></h4>
				{/* </Link> */}
			</div>
		</section>
		<section className={styles['container--secondary']}>
			<div className={styles['heading--secondary']}>
				<h2 className={styles.headingtext}>Looking for collab?</h2>
			</div>
			<div className={styles['intro--secondary']}>
				<section>
					<h3 className={styles.subtitle}>Content Creation</h3>
					<ul className={styles.list}>
						<li>Sponsored Posts</li>
						<li>Product Placements</li>
						<li>Paid Usage Content</li>
					</ul>
				</section>
				<section>
					<h3 className={styles.subtitle}>Interactive Collabs</h3>
					<ul className={styles.list}>
						<li>Live Streaming</li>
						<li>Event Appearances</li>
						<li>Brand Ambassadors</li>
					</ul>
				</section>
			</div>
			<div className={styles['action--secondary']}>
				<Link activeClass="active" to="creators" spy={true} smooth={true} offset={-50} duration={500} className={styles['link--secondary']}>
					<h4 className={styles.actionText}>Meet our creators ➡</h4>
				</Link>
			</div>
		</section>
		</div>
	);
}

export default Intro;