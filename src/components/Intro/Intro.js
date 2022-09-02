import React from 'react';
import styles from './Intro.css';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

/*
*/

function Intro () {
	return (
		<div>
		<section className={styles['container--primary']}>
			<div className={styles['heading--primary']}>
				<h2 className={styles.headingtext}>People first,<br/> influencers second</h2>
			</div>
			<p className={styles['intro--primary']}>
				Hi, I'm Taiga!<br/><br/>
				A professional cosplayer that has been active in the cosplay community for 12+ years.<br/><br/>
				I founded Taiga Production to help my family of creator friends grow and excel.<br/><br/>
				We are small by design. Because we geniunely care.<br/><br/>
			</p>
			<div className={styles['action--primary']}>
				{/* <Link activeClass="active" to="history" spy={true} smooth={true} offset={-50} duration={500} className={styles['link--primary']}> */}
					<h4 className={styles.actionText}><a href="https://www.instagram.com/taiga765">Reach out ➡</a></h4>
				{/* </Link> */}
			</div>
		</section>
		{/* <section className={styles['container--secondary']}>
			<div className={styles['heading--secondary']}>
				<h2 className={styles.headingtext}>经营范围</h2>
			</div>
			<div className={styles['intro--secondary']}>
				<section>
					<h3 className={styles.subtitle}>生产与销售</h3>
					<ul className={styles.list}>
						<li>油田助剂、水处理剂</li>
						<li>防蜡防垢防腐装置</li>
						<li>机械设备、金属材料</li>
						<li>润滑油、矿产品</li>
					</ul>
				</section>
				<section>
					<h3 className={styles.subtitle}>运营与技术服务</h3>
					<ul className={styles.list}>
						<li>环境保护设施运营</li>
						<li>油田采注工艺技术开发</li>
						<li>防垢防腐及环保技术研发</li>
					</ul>
				</section>
			</div>
			<div className={styles['action--secondary']}>
				<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className={styles['link--secondary']}>
					<h4 className={styles.actionText}>联系我们 ➡</h4>
				</Link>
			</div>
		</section> */}
		</div>
	);
}

export default Intro;