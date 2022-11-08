

import { Trash, Check } from "phosphor-react"
import { TaskInterface } from "./Task"
import styles from './TaskCompleted.module.css'

export function TaskCompleted({ id, content, onDeleteTask, onCompleteTask, onUncompleteTask}: TaskInterface){
    function handleDeleteTask(){
        onDeleteTask(content)
    }

    function UncompleteTask(){
        onUncompleteTask!(content)
    }
    
    return(
        <div className={styles.Task}>
            <div className={styles.DivButtonContent}>
                <div>
                    <Check onClick={UncompleteTask} className={styles.DoneButton} />
                </div>
                <div className={styles.ButtonContent}>
                    <p className={styles.ContentCompleted}>{content}</p>
                </div>
            </div>

            <button onClick={handleDeleteTask} className={styles.DeleteTaskButton}> <Trash size={20} /></button>
        </div>
    )
}