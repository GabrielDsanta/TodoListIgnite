//Default Imports
import { MouseEvent, useState } from 'react'
import { FormEvent, ChangeEvent } from 'react'

//Styles Imports
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import ClipBoardLogo from './assets/Clipboard.svg'

import { Task } from './components/Task';
import { TaskInterface } from './components/Task'
import { TaskCompleted } from './components/TaskCompleted';

export function App({ id, content, onDeleteTask, onCompleteTask}: TaskInterface) {

  // States
  const [ TaskID, setTaskID ] = useState([0], )

  const [ ListaDeTarefas, setListaDeTarefas ] = useState([], )

  const [ TarefasConcluidas, setTarefasConcluidas] = useState([],)

  const [ Comments, setComments ] = useState(['',], )



  // Functions
  function HandleAddText(event: ChangeEvent<HTMLInputElement>){
    setComments([...Comments, event.target.value])
  }

  function AddTask(event: FormEvent){
    event.preventDefault()
    const inputText = event.target.TextValue.value

    setTaskID([...TaskID, ListaDeTarefas.length + 1])
    setComments([...Comments, inputText])
    setListaDeTarefas([...ListaDeTarefas, {id: ListaDeTarefas.length, content: inputText}])
    event.target.TextValue.value = ''

  }

  function DeleteTask(content: string){
    const taskToBeDeleted = ListaDeTarefas.filter((taskDelete: TaskInterface) => {
      return content !== taskDelete.content
    })

    setListaDeTarefas(taskToBeDeleted)
  }

  function DeleteCompletedTask(content: string){
    const taskToBeDeleted = ListaDeTarefas.filter((taskDelete: TaskInterface) => {
      return content !== taskDelete.content
    })

    setTarefasConcluidas(taskToBeDeleted)
  }

  function CompleteTask(content: string){
    const taskCompleted = ListaDeTarefas.filter((taskCompleted: TaskInterface) => {
      return content == taskCompleted.content
    })
    DeleteTask(content)
    setTarefasConcluidas([...TarefasConcluidas, {id: TarefasConcluidas.length, content: content}])
    console.log(TarefasConcluidas.length)
  }


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

            <span className={styles.NumberCreatesTasks}>{ListaDeTarefas.length}</span>
          </div>

          <div className={styles.TaskDone}>
            <span className={styles.CompletedTasks}>
              Concluidas
            </span>

            <span className={styles.NumberCompletedTasks}>{TarefasConcluidas.length} de {ListaDeTarefas.length}</span>
          </div>
      </div>
      
      <section>

        {ListaDeTarefas.length >= 1 || TarefasConcluidas.length == 0 &&(
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

      {ListaDeTarefas.map((task: TaskInterface) => {
          return <Task onCompleteTask={CompleteTask} onDeleteTask={DeleteTask} key={task.id} content={task.content} />
        })
      }

      {TarefasConcluidas.length > 0 && (
        TarefasConcluidas.map((task: TaskInterface) => {
          return <TaskCompleted onCompleteTask={CompleteTask} onDeleteTask={DeleteCompletedTask} key={task.id} content={task.content} />
        })
      )}
    </main>
  )
}


