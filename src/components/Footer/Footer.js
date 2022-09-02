import React from 'react';
import styles from './Footer.css';
import hero from '../../assets/oil-refinery.jpg';

function Footer () {
    const links = {
      homepage: 'https://github.com/karuto',
      github: 'https://github.com/karuto/github-static-site-template',
      email: 'mailto:hi@vincentzh.com'
    };
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{backgroundImage: `url('dist/${hero}')`}} className={styles.container}>
            <div className={styles.overlay}>
                <h5 className={styles.copyright}>
                    {`©${currentYear} 北京东方华盛科技有限公司 保留所有权利`}
                </h5>
            </div>
            {/* Made by <a href={links.homepage}>Vincent Zhang.</a>
            &nbsp;Find this project on <a href={links.github}>GitHub</a>
            &nbsp;or write me an <a href={links.email}>email.</a> */}
        </footer>
    );
};

export default Footer;
