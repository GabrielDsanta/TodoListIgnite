//Default Imports
import { useState } from 'react'
import { FormEvent, ChangeEvent, MouseEvent } from 'react'

//Styles Imports
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import ClipBoardLogo from './assets/Clipboard.svg'

import { Task } from './components/Task';
import { TaskInterface } from './components/Task'
import { TasksList } from "./main"

export function App({ id, content }: TaskInterface) {

  // States
  const [ Tasks, setTasks ] = useState(0, )

  const [ Comment, setComment ] = useState('', )

  const [newCommentText, setNewCommentText] = useState('', )


  // Functions
  function HandleAddText(event: ChangeEvent<HTMLInputElement>){
    setNewCommentText(event.target.value) 
    setComment(event.target.value)
  }

  function AddTask(event: FormEvent){
    event.preventDefault()

    setTasks((value) => {
      return value + 1
    })

    console.log(TasksList)
    TasksList.push({id: Tasks, content: Comment})
    setNewCommentText('')
    focus()
  }

  // Content On Screen
  return(
    <main className={styles.main}>

      
      <form onSubmit={AddTask}>
        <input value={newCommentText} onChange={HandleAddText} placeholder='Adicione uma nova tarefa' type="text" />
        <div>
          <button type='submit'>
            <span>Criar</span>
            <PlusCircle className={styles.PlusIcon} size={16} />
          </button>
        </div>
      </form>

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
      
      <section>

        {TasksList.length == 0  && (
          <div className={styles.Tasks}>
          <img src={ClipBoardLogo} alt="" />

          <div>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong><br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
        )}
      
      </section>

      {TasksList.map((task) => {
          return <Task key={task.id} content={task.content} />
      })}
    </main>
  )
}


