//Default Imports
import { useState } from 'react'
import { MouseEvent, ChangeEvent } from 'react'

//Styles Imports
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import ClipBoardLogo from './assets/Clipboard.svg'

import { Task } from './components/Task';
import { TaskInterface } from './components/Task'
import { TasksList } from "./main"

export function App({ id, content}: TaskInterface) {

  // States
  const [ Tasks, setTasks ] = useState(0, )
  const [ Comment, setComment ] = useState('', )


  // Functions
  function AddTask(event: MouseEvent<HTMLButtonElement>){
    event.preventDefault()

    setTasks((value) => {
      return value + 1
    })

    setComment(Comment)
    console.log(TasksList)
    TasksList.push({id: Tasks, content: Comment})
  }

  function NewCommentChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setComment(event.target.value)
    {[...Comment, setComment(event.target.value)]}
    console.log(Comment)
  }

  // Content On Screen
  return(
    <main className={styles.main}>

      
      <form>
        <input onChange={NewCommentChange} placeholder='Adicione uma nova tarefa' type="text" />
        <div>
          <button onClick={AddTask} type='submit'>
            <span>Criar</span>
            <PlusCircle className={styles.PlusIcon} size={16} />
          </button>
        </div>
      </form>
      
      
      <section>

        <div className={styles.TaskInfos}>
          <div className={styles.TaskToDo}>
            <span>
              Tarefas Criadas
            </span>

            <span className={styles.NumberCreatesTasks}>{Tasks}</span>
          </div>

          <div className={styles.TaskDone}>
            <span className={styles.CompletedTasks}>
              Concluidas
            </span>

            <span className={styles.NumberCompletedTasks}>0</span>
          </div>
        </div>

        <div className={styles.Tasks}>
          <img src={ClipBoardLogo} alt="" />

          <div>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong><br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
      </div>
      
      </section>

      {TasksList.map(() => {
          return <Task key={id} content={content} />
      })}
    </main>
  )
}


