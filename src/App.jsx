import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'

import styles from './App.module.css'
import '../src/global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Giovanni Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa veritatis ad minima, incidunt rem consectetur sapiente soluta obcaecati quas labore laboriosam neque, vero odit. Incidunt sunt fugit consectetur doloremque."
          />

          <Post
            author="Giovanni Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa veritatis ad minima, incidunt rem consectetur sapiente soluta obcaecati quas labore laboriosam neque, vero odit. Incidunt sunt fugit consectetur doloremque."
          />
        </main>
      </div>
    </>
  )
}


