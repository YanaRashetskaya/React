import React from 'react'
import styles from './AppFooter.module.scss'
import logo from '../../assets/icon/logo2.png'


export default function AppFooter() {
    return (
        <div className={styles.footer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p>©2022 Online Tutorials | All Rights Reserved</p>
        </div>
    )
}
