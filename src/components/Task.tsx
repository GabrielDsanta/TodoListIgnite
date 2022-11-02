

import { Trash } from "phosphor-react"
import styles from './Task.module.css'

export interface TaskInterface{
    id?: number,
    content?: string
}

export function Task({ id, content}: TaskInterface){
    return(
        <div className={styles.Task}>
            <button className={styles.DoneButton}></button>
            <p>{content}</p>
            <button className={styles.DeleteTaskButton}> <Trash size={20} /></button>
        </div>
    )
}