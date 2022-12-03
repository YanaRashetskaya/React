import React from 'react'
import styles from './Flashcard.module.scss'
import CardFilling from './CardFilling';




export default Flashcard = ({ wordsState, createData }) => {
    return (
        <div className={styles.flashcard}>
            {
                wordsState.map((word) => <CardFilling key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></CardFilling>)
            }
        </div>
    )
}
