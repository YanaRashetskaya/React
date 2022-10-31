import React from 'react'
import styles from './style/Flashcard.css'

export default function Flashcard() {
    return (
        <div className={styles.flashcard}>
            <p>Слово</p>
            <p>Перевод</p>
        </div>
    )
}
