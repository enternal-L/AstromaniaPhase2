import Link from "next/link";
import styles from "../styles/Layout.module.scss"

const Layout = () =>{
  return (
    <>
    <nav className={styles.nav}>
    <Link href=""><h1>Home</h1></Link>
      <ul>
        <Link href=""><li>Leaderboard</li></Link>
        <Link href=""><li>Contacts</li></Link>
      </ul>
      
      </nav>
    </>
  )
}

export default Layout;