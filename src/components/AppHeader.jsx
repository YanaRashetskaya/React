import React from 'react'
import styles from './style/AppHeader.css'
import logo from "../assets/icon/logo2.png";
import icon from "../assets/icon/icon-search.png"

export default function AppHeader() {
    return (
        <>
            <div className={styles.header}>
                <img src={logo} alt='logo'></img>
                <img src={icon} alt='icon'></img>
                <p className={styles.sin}>Войти</p>
                <p className={styles.log}>Зарегистрироваться</p>
            </div>

        </>
    )
}
