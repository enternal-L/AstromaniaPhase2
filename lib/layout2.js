import styles from "../styles/Layout.module.scss"
import Link from "next/link";

const Layout2 = () =>{
  return (
    <div className={styles.div}>
        <Link href="/">  
             <a>
                    Home
             </a>
        </Link>
            
        <Link href="/leaderboard">
             <a>
                    Leaderboard
             </a>
        </Link>
            
        <Link href="/contacts">
            <a>
                    Contacts
            </a>
        </Link>
    </div>
  )
}

export default Layout2;