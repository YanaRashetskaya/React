import React from 'react'
import styles from './AppMain.module.scss'
import EditableTable from '../WordList/EditableTable';


export default function AppMain({words, editWords}) {
    return (
        <div className={styles.main}>
            <div className={styles.words_list}>
                <h2 className={styles.words}>ALL WORDS</h2>
                <EditableTable words={words} editWords={editWords}/>
            </div>
        </div>
    )
}
