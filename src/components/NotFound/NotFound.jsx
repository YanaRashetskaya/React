import processing from '../../assets/icon/processing.gif'
import { Link } from "react-router-dom";
import styles from './NotFound.module.scss';


function NotFound() {
    return (
        <div className={styles.found}>
            <p className={styles.found__message}> Whoops!</p>
            <p className={styles.found__message}> 440 Page Not Found</p>
            <img src={processing} alt="404" className={styles.found__error} />
            <p>
                <Link to="/" className={styles.found__message}>Go to the home page</Link>
            </p>
        </div>
    )
}

export default NotFound;