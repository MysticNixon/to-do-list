'use client'
import { start } from 'repl'
import styles from './page.module.css'
import React, { useState } from 'react'

export default function Home() {
  const [tasks,setTasks]=useState<string[]>([])
  const [userTasks, setUserTasks] = useState<string>("")
  
  function deleteTask(index: number){
    const newtasks = [...tasks]

    newtasks.splice(index, 1)

    setTasks(newtasks)
  }
  function pushing() {
    setTasks([...tasks,userTasks])
  }

  function handlechange(event: React.ChangeEvent<HTMLInputElement>){ 
    setUserTasks(event.target.value)
  }
  return (
    <main className={[styles.main, 'center'].join(" ")}>
      <link rel='style' href='page.module.css'></link>
      <h1 className='title'>to do list</h1>
      <hr className='line'/>
      <div className='main-container'>
        <div className='input-bar-container'>
          <div><input className='inputbar' type="text" onChange={handlechange}/>
          <button className='submit' onClick={pushing}>+</button></div>
          <ol className='list'>
          {tasks.map((value, index) => {return (
            <div key={Math.random() * 1000} className='list-item' >
              <li className='mainlist'>
                {value}
              </li>
              <button className='deletefunc' onClick={()=>deleteTask(index)}>X</button>
            </div>
          )})}
        </ol>
        </div>
        
      </div>
    </main>
  )
}
