
import styles from './style/CardBox.css';

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
            <div className="btnWrapper">
                <button className="btn" alt="left" onClick={props.showPrev}>Back</button>
                <button className="btn" alt="right" onClick={props.showNext}>Next</button>
            </div>
        </div >
    )
}