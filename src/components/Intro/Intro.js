import React from 'react';
import styles from './Intro.css';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';


function Intro () {
	return (
		<div>
		<section className={styles['container--primary']}>
			<div className={styles['heading--primary']}>
				<h2 className={styles.headingtext}>北京东方华盛简介</h2>
			</div>
			<p className={styles['intro--primary']}>
				北京东方华盛科技有限公司成立于 2011 年 5 月 10 日，注册资金 3800 万元，是一般纳税人企业、国家高新技术企业、全国科技创新示范单位、AAA 级信用企业、重合同守信用企业。<br/><br/>
				拥有全资分支机构：北京东方华盛科技有限公司西安分公司、仙桃华胜化工有限公司。公司资金充裕，生产经营稳定，社会信誉良好。
			</p>
			<div className={styles['action--primary']}>
				<Link activeClass="active" to="history" spy={true} smooth={true} offset={-50} duration={500} className={styles['link--primary']}>
					<h4 className={styles.actionText}>详细介绍 ➡</h4>
				</Link>
			</div>
		</section>
		<section className={styles['container--secondary']}>
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
		</section>
		</div>
	);
}

export default Intro;