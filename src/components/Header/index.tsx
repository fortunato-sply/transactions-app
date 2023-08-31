import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <span></span>
                <div className={styles.image}>
                    <NavLink to='/'><img src="money.png" alt="" /></NavLink>
                </div>
                <nav>
                    <NavLink to='/add'>new transaction</NavLink>
                </nav>
            </div>
        </div>
    )
}