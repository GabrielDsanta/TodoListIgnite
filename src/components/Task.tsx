

import { Trash } from "phosphor-react"
import styles from './Task.module.css'

export interface TaskInterface{
    id?: number,
    content: string,
    onDeleteTask: (content: string) => void,
    onCompleteTask: (content: string) => void,
    onUncompleteTask?: (content: string) => void,
}

export function Task({ id, content, onDeleteTask, onCompleteTask}: TaskInterface){
    function handleDeleteTask(){
        onDeleteTask(content)
    }

    function handleCompleteTask(){
        onCompleteTask(content)
    }

    return(
        <div className={styles.Task}>
            <div className={styles.DivButtonContent}>
                <div>
                    <button onClick={handleCompleteTask} className={styles.DoneButton}></button>
                </div>
                <div className={styles.ButtonContent}>
                    <p>{content}</p>
                </div>
            </div>

            <button onClick={handleDeleteTask} className={styles.DeleteTaskButton}> <Trash size={20} /></button>
        </div>
    )
}