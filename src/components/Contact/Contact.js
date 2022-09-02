import React from 'react';
import styles from './Contact.css';
import Callout from '../Callout/Callout';
import { Element } from 'react-scroll';

function Contact () {
	return (
		<Element name="contact">
		<section className={styles.container}>
			<Callout heading='联系方式' enableShadow enableTheme>
				<div className={styles.content}>
				<table>
				<tbody>
					<tr>
						<td>地址</td>
						<td>北京市朝阳区广渠路 28 号合生财富广场三层 L305</td>
					</tr>
					<tr>
						<td>电话</td>
						<td>010-58632913</td>
					</tr>
					<tr>
						<td>手机</td>
						<td>13911752338 张经理<br/>13436974602 黄经理</td>
					</tr>
					<tr>
						<td>传真</td>
						<td>010-58632913</td>
					</tr>
					<tr>
						<td>邮箱</td>
						<td><a className={styles.link} href="mailto:bjdfhskj@163.com">bjdfhskj@163.com</a><br/><a className={styles.link} href="mailto:761125076@qq.com">761125076@qq.com</a></td>
					</tr>
					<tr>
						<td>网址</td>
						<td><a className={styles.link} href="//www.beijinghuasheng.com">www.beijinghuasheng.com</a></td>
					</tr>
				</tbody>
				</table>
				</div>
			</Callout>
		</section>
		</Element>
  	);
}

export default Contact;
