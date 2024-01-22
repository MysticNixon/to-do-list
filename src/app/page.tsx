'use client'
import { start } from 'repl'
import styles from './page.module.css'
import React, { useState, Dispatch, SetStateAction } from 'react'
import { link } from 'fs'

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [userTasks, setUserTasks] = useState<string>("")

  function deleteTask(index: number, taskList: string[], taskSetter: Dispatch<SetStateAction<string[]>>) {
    const newtasks = [...taskList]
    newtasks.splice(index, 1)
    taskSetter(newtasks)
  }

  function moveToCompleted(index: number) {
    const taskToMove = tasks[index]
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)

    setCompletedTasks( [...completedTasks, taskToMove])
  }

  function pushing() {
    setTasks([...tasks, userTasks])
  }

  function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserTasks(event.target.value)
  }

  function editTask(index: number , userInput: string){
    const tasksToEdit = [...tasks]
    tasksToEdit[index] = userInput

  }

  return (
    <main className={[styles.main, 'center'].join(" ")}>
      <link rel='style' href='page.module.css'></link>
      <h1 className='title'>to do list</h1>
      <hr className='line' />
      <div className='main-container'>
        <div className='input-bar-container'>
          <div>
            <input minLength={1} className='inputbar' type="text" onChange={handlechange} />
            <button className='submit' onClick={pushing}>add</button>
          </div>
          <ol className='list'>
            {tasks.map((value, index) => {
              return (
                <div key={Math.random() * 1000} className='list-item' >
                  <input className='checkbox' type='checkbox' onChange={() => moveToCompleted(index)}></input>
                  {`${index + 1}. ${value}`}
                  <li className='mainlist'>
                  </li>
                  <button className='deletefunc' onClick={() => deleteTask(index, tasks, setTasks)}>X</button>
                </div>
              )
            })}
          </ol>
        </div>
      </div>
      <div className='completed-container'>
        <h1 className='submit-title'>completed</h1>
        <hr className='completed-line' />
        <ol className='completed-task-list'>
          {completedTasks.map((value, index) => (
            <div className='completed-list'>
            <li key={Math.random() * 1000}>{`${value}`}</li>
            <button className='deletecompleted' onClick={() => deleteTask(index, completedTasks, setCompletedTasks)}>X</button>
            </div>
          ))}
        </ol>
      </div>
      <div className='info-container'>
        <a className='github' href="https://github.com/MysticNixon">Check out my github</a>
      </div>
    </main>
  )
}
