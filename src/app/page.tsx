'use client'
import styles from './page.module.css'

export default function Home() {
  const tasks=["poop","eat","gym"]

  function pushing() {
      console.log("test")
  }

  return (
    <main className={styles.main}>
      <h1>Niko's to do list</h1>
      <input type="text"/>    
      <ol>
      {tasks.map((value, index) => {return  <li>{value}</li> })}
      </ol>
      
      <button onClick={pushing}>add</button>
      
    </main>
  )
}
