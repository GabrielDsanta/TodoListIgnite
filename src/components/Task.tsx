

import { Trash } from "phosphor-react"
import styles from './Task.module.css'

export interface TaskInterface{
    id?: number,
    content?: string,
}

export function Task({ id, content }: TaskInterface){
    function handleDeleteTask(): void{
    }

    return(
        <div className={styles.Task}>
            <div className={styles.DivButtonContent}>
                <div>
                    <button className={styles.DoneButton}></button>
                </div>
                <div className={styles.ButtonContent}>
                    <p>{content}</p>
                </div>
            </div>

            <button onClick={handleDeleteTask} className={styles.DeleteTaskButton}> <Trash size={20} /></button>
        </div>
    )
}