import React from 'react'
import styles from './style/AppHeader.css';
import logo from '../../assets/icon/logo2.png'

import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.header__nav__logo}>
                <Link to="/main"><img src={logo} alt="logo" className={styles.logo} /></Link>
            </ul>
            <ul className={styles.header__nav__link}>
                <Link className={styles.link} to="/main">Home</Link>
            </ul>
            <ul className={styles.header__nav__link}>
                <Link className={styles.link} to="/words">Words</Link>
            </ul>
            <ul className={styles.header__nav__link} >
                <Link className={styles.link} to="/game">Game</Link>
            </ul>
        </nav>
    )
}
