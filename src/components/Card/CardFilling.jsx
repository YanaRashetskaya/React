import React, { useState } from 'react'
import ShowWord from './ShowWord';
import styles from './Flashcard.module.scss'



export default function CardFilling(props) {
    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(!pressed);
    }


    return (
        <div className={styles.card}>
            <div className={styles.card_word}>{props.english}</div>
            <div className={styles.card_transcription}>{props.transcription}</div>
            {pressed ? (
                <div className={styles.card_word}>{props.russian}</div>
            ) : (
                <ShowWord show={handleChange}></ShowWord>
            )}
        </div>
    );
}
