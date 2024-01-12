'use client'
import { start } from 'repl'
import styles from './page.module.css'
import React, { useState } from 'react'

export default function Home() {
  const [tasks,setTasks]=useState<string[]>([])
  let usertasks = ""

  function deleteTask(index: number){
    let arrslice = tasks.slice(index + 1)
    setTasks(arrslice)
    console.log("test",index)
  }
  function pushing() {
    setTasks([...tasks,usertasks])
    console.log(tasks)
  }

  function handlechange(event: React.ChangeEvent<HTMLInputElement>){
    usertasks = event.target.value
  }
  return (
    <main className={styles.main}>
      <h1>Niko's to do list</h1>
      <input type="text" onChange={handlechange}/>    
      <ol>
      {tasks.map((value, index) => {return (
        <div key={Math.random()*1000} >
          <li>
            {value}
          </li>
          <button onClick={()=>deleteTask(index)}>X</button>
        </div>
      )})}
      </ol>
      
      <button onClick={pushing}>add</button>
    </main>
  )
}
