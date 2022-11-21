import React from 'react'
import styles from './style/Flashcard.css'
import CardFilling from './CardFilling';
import words from '../../data';



export default function Flashcard() {
    return (
        <div className={styles.flashcard}>
            {
                words.map((word) => <CardFilling key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></CardFilling>)
            }
        </div>
    )
}
