
import styles from './CardBox.module.scss';

export default function CardBox(props) {
    return (
        <div className={styles.card__container}>
            <div className={styles.card__box}>
                <p>изучено слов: {props.learned}</p>
                <div>{props.children}</div>
                <p className={styles.card__counter}>
                    {props.number} / {props.total}
                </p>
            </div>
            <div className={styles.btnWrapper}>
                <button className={styles.btn} alt="left" onClick={props.showPrev}>Back</button>
                <button className={styles.btn} alt="right" onClick={props.showNext}>Next</button>
            </div>
        </div >
    )
}