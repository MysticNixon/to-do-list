import { array } from 'prop-types'
import styles from './page.module.css'

function niko(){
  return ""
}
export default function Home() {
  const tasks=["poop","eat","gym"]
  return (
    <main className={styles.main}>
      <h1>Niko's to do list</h1>
      <input type="text"/>    
      <ol>
      {tasks.map((value, index) => {return  <li>{value}</li> })}
      </ol>
    </main>
  )
}
