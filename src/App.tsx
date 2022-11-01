//Default Imports
import { useState } from 'react'

//Styles Imports
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import ClipBoardLogo from './assets/Clipboard.svg'

export function App() {
  return(
    <main className={styles.main}>

      
      <form>
        <input placeholder='Adicione uma nova tarefa' type="text" />
        <div>
          <button type='submit'>
            <span>Criar</span>
            <PlusCircle className={styles.PlusIcon} size={16} />
          </button>
        </div>
      </form>
      
      
      <div>
        <div>
          <span>
            Tarefas Criadas <span>0</span>
          </span>
        </div>

        <div>
          <span>
            Concluidas <span>0</span>
          </span>
        </div>
      </div>

      <section>
        <img src={ClipBoardLogo} alt="" />

        <div>
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong><br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </section>

    </main>
  )
}


