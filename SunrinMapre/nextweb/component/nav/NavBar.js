import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function Nav(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img className={styles.icon} src='/sunrinicon.png' alt='icon'></img>
                <Link href={"#"}>SunrinMap</Link>
            </div>
            <ul className={styles.navbar__menu}>
                <li><Link className={styles.list_item} href={'#'}>반목록</Link></li>
                <li><Link className={styles.list_item} href={'#'}>오시는길</Link></li>
                <li><Link className={styles.list_item} href={'#'}>어쩌구</Link></li>
                <li><Link className={styles.list_item} href={'#'}>저쩌구</Link></li>
            </ul>
        </nav>
    )
}