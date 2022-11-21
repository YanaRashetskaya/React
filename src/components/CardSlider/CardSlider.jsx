import React, { useState } from 'react';
import CardBox from './CardBox';
import CardFilling from '../Card/CardFilling';
import words from '../../data';
import styles from './style/CardBox.css';



export default function CardSlider(props) {
    const [currentItem, setPosition] = useState(0);
    const [learnedWordsTotal, setLearnedWordsTotal] = useState(0);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }

    const showNext = () => {
        setPressed(false);
        setPosition(currentItem + 1);
        if (!pressed)
            setLearnedWordsTotal(learnedWordsTotal + 1);
    }

    const showPrev = () => {
        setPressed(false);
        if (currentItem > 0)
            setPosition(currentItem - 1);
    }

    if (currentItem >= words.length) {
        return (
            <div className={styles.endCard}>
                <div>Поздравляем,Вы изучили все слова!</div>
                <div>Всего изучено слов: {learnedWordsTotal}</div>
            </div>
        )
    } else {
        return (
            <CardBox
                showPrev={showPrev}
                showNext={showNext}
                number={currentItem + 1}
                total={words.length}
                learned={learnedWordsTotal}
                children={<CardFilling
                    pressed={pressed}
                    show={handleChange}
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                    tags={words[currentItem].tags} />}>
            </CardBox>
        )
    }
}