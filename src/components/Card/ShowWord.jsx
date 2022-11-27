import React, { useEffect, useRef } from 'react';
import styles from './Flashcard.module.scss'

const ShowWord = (props) => {
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    return (
        <button ref={ref} onClick={props.show} className={styles.card_btn}>Показать перевод</button>
    );
}

export default ShowWord;