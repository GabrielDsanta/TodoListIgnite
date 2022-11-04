//Default Imports
import { useState } from 'react'
import { FormEvent, ChangeEvent } from 'react'

//Styles Imports
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import ClipBoardLogo from './assets/Clipboard.svg'

import { Task } from './components/Task';
import { TaskInterface } from './components/Task'
import { TasksList } from "./main"

export function App({ id, content }: TaskInterface) {

  // States
  const [ TaskID, setTaskID ] = useState([0], )

  const [ ListaDeTarefas, setListaDeTarefas ] = useState([{id, content}], )

  const [ Comments, setComments ] = useState(['',], )



  // Functions
  function HandleAddText(event: ChangeEvent<HTMLInputElement>){
    setComments([...Comments, event.target.value])
  }

  function AddTask(event: FormEvent){
    event.preventDefault()

    setTaskID([...TaskID, TaskID.length + 1])
    setComments([...Comments, event.target.TextValue.value])
    setListaDeTarefas([...ListaDeTarefas, {id: TaskID.length + 1, content: event.target.TextValue.value}])
  }

  // function DeleteTask(id: number){
  //   const TaskToBeDeleted = TasksList.map((TaskDelete) => {
  //     return id == TaskDelete.id
  //   })

  //   setTasks(TaskToBeDeleted)
  // }


  // Content On Screen
  return(
    <main className={styles.main}>

      
      <form onSubmit={AddTask}>
        <input name='TextValue' onChange={HandleAddText} autoFocus placeholder='Adicione uma nova tarefa' type="text" />
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

            <span className={styles.NumberCreatesTasks}>{TaskID.length - 1}</span>
          </div>

          <div className={styles.TaskDone}>
            <span className={styles.CompletedTasks}>
              Concluidas
            </span>

            <span className={styles.NumberCompletedTasks}>0</span>
          </div>
      </div>
      
      <section>

        {ListaDeTarefas.length == 0  && (
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

      {ListaDeTarefas.map((task) => {
          return <Task key={task.id} content={task.content} />
        })
      }
    </main>
  )
}


